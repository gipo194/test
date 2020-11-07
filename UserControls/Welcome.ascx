<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Welcome.ascx.cs" Inherits="MDLWeb.UserControls.Welcome" %>

<table style="border: 0; background:#006666;width:100%; padding: 0;">
    <tr>
       <!-- Menu -->
        <td style="width: 48%; height: 30px; vertical-align: top">
            <!--Label that displays the version-->
            <asp:Label ID="VersionLabel" runat="server" ForeColor="#005555" Height="25px"
                Font-Size="Smaller" Style="margin-left: 20px; margin-top: 5px" />
        </td>              
       <!--Label that displays the welcome banner-->
        <td style="width: 100%; text-align: Right; vertical-align: bottom">
            <asp:Label ID="NameLbl" runat="server" Height="25px" BackColor="#006666"
                ForeColor="White" Font-Size="Smaller" ToolTip = "" Style="margin-right: 20px;" />
        </td>      
    </tr>
    
</table>