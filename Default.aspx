<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs"
Inherits="MDLWeb.Default" %> <%@ Register Src="~/UserControls/Header.ascx"
TagPrefix="MDL" TagName="Header" %> <%@ Register
Src="~/UserControls/Welcome.ascx" TagPrefix="MDL" TagName="Welcome" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head id="Head1" runat="server">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=10, user-scalable=yes">
    <title>MDL</title>
    <style type="text/css">
      html,
      body {
        height: 100%;
        overflow: auto;
      }

      body {
        padding: 0;
        margin: 0;
      }
    </style>
        <script type="text/javascript">
          var Ext = Ext || {}; // Ext namespace won't be defined yet...
  
          // This function is called by the Microloader after it has performed basic
          // device detection. The results are provided in the "tags" object. You can
          // use these tags here or even add custom tags. These can be used by platform
          // filters in your manifest or by platformConfig expressions in your app.
          //
          Ext.beforeLoad = function (tags) {
              var s = location.search,  // the query string (ex "?foo=1&bar")
                  profile;
  
              // For testing look for "?classic" or "?modern" in the URL to override
              // device detection default.
              //
              if (s.match(/\bclassic\b/)) {
                  profile = 'classic';
              }
              else if (s.match(/\bmodern\b/)) {
                  profile = 'modern';
              }
              else {
                  profile = tags.desktop ? 'classic' : 'modern';
                  //profile = tags.phone ? 'modern' : 'classic';
              }
  
              Ext.manifest = profile; // this name must match a build profile name
  
              // This function is called once the manifest is available but before
              // any data is pulled from it.
              //
              //return function (manifest) {
                  // peek at / modify the manifest object
              //};
          };
      </script>
  
      <!-- The line below must be kept intact for Sencha Cmd to build your application -->
      <script id="microloader" data-app="c63fe754-5fcf-4dc8-93ea-5f572d7a779f" type="text/javascript" src="bootstrap.js"></script>
  
  </head>
  <body>
    <form id="form1" runat="server" style="height: 100%">
      <div>
        <MDL:Header ID="Header1" runat="server" />
      </div>
      <div>
        <MDL:Welcome ID="Welcome" runat="server" />
      </div>

    </form>
  </body>
</html>
