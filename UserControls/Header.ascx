<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Header.ascx.cs" Inherits="MDLWeb.UserControls.Header" %>

<table border="0" width="100%" cellpadding="0px" cellspacing="0px">
    <tr>
        <%-- Left Logo Holder--%>
        <td width="20%" style="vertical-align: top;">
            <asp:Image ID="Logo" runat="server" ImageUrl="<%$ AppSettings: Logo %>" height="59" border="0" alt="Logo" Style="display: block" />

        </td>

        <%-- Center--%>
        <td rowspan="2" width="60%" align="center">
            <asp:Label ID="Label1" runat="server" Text="Meter Data Link" Font-Size="XX-Large" Font-Bold="true" />
        </td>

        <%-- Right Logo Holder--%>
        <td width="20%" style="vertical-align: top;" align="right">
            <asp:Image ID="MNSTitle" runat="server" ImageUrl="~/Images/MPA.jpg" Width="236" Height="59" border="0"
                alt="MDL Image Title" Style="display: block;" />

        </td>
    </tr>

</table>
