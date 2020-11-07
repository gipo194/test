using System;
using System.Diagnostics;
using System.Reflection;
using System.Web.UI;
using MDLWeb.Properties;
using MDLWeb.WebDBService;
using static System.Security.Principal.WindowsIdentity;

namespace MDLWeb.UserControls
{
    public partial class Welcome : UserControl
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string version = FileVersionInfo.GetVersionInfo(Assembly.GetExecutingAssembly().Location).FileVersion;
            VersionLabel.Text = $"Version {version}";
            if (Settings.Default.Environment != "Production")
                VersionLabel.ToolTip = $"Version {version}: {Settings.Default.Environment} Mode";
#if OFFLINE
            NameLbl.Text = "Offline Mode";
#else
            string currentUser = Context.User.Identity.Name;
            currentUser = !string.IsNullOrEmpty(currentUser) 
                ? currentUser.Split('\\')[1] 
                : GetCurrent().Name.Split('\\')[1];
            UserDetails currentUserDetails = new UserDetails();
            try
            {
                //Perform a security check against the database
                currentUserDetails = new WebDBServiceClient("WebDBServiceEndpoint").GetUserDetails(currentUser);
            }
            catch (Exception)
            {
                // ignore
            }

            switch (currentUserDetails?.ErrorMessage)
            {
                case "no error":
                    string firstName = currentUserDetails.UserFirstName;
                    string lastName = currentUserDetails.UserLastName;
                    //Display a welcome message to the user logged in
                    NameLbl.Text = $"Welcome {firstName} {lastName}";
                    break;
                case "user Does Not Exist":
                    ////Access Denied and error message handled at the silverlight application level.
                    Response.Redirect(Settings.Default.MnsUrl);
                 //   NameLbl.Text = $"Welcome {currentUser}";
                    break;
                default:
                    NameLbl.Text = $"Welcome {currentUser}";
                    break;
            }
#endif
        }
    }
}