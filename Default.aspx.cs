using System;
using System.Web;
using System.Web.UI;
using System.Collections.Specialized;
using System.Configuration;
using System.Text;
namespace MDLWeb
{
    public partial class Default : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Response.Cache.SetCacheability(HttpCacheability.NoCache);
        }     
    }
}