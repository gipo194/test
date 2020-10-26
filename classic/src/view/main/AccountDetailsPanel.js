Ext.define("Test.view.main.AccountDetailsPanel", {
  extend: "Ext.grid.Panel",
  xtype: "accountDetailsPanel",
  requires: ["Test.store.AccountDetailsStore",
   "Ext.grid.plugin.Exporter"],

  bbar: [
    {
      xtype: "button",
      text: "export",
      handler: function () {
        var gridRef = Ext.ComponentQuery.query("grid")[0];
        gridRef.saveDocumentAs({
          type: "xlsx",
          charset: "Shift-JIS",
          title: "Sample",
          fileName: "sample.xlsx",
        });
      },
    },
  ],
  plugins: [
    {
      ptype: "gridexporter",
    },
  ],

  title: "Account Details",

  store: {
    type: "accountDetailsStore",
  },
  columns: [
    { text: "Name", dataIndex: "CustomerName1", flex: 1 },
    { text: "AddressLine1", dataIndex: "AddressLine1", flex: 1 },
    { text: "AddressLine2", dataIndex: "AddressLine2", flex: 1 },
    { text: "City", dataIndex: "City", flex: 1 },
    { text: "State", dataIndex: "State", flex: 1 },
    { text: "Zip", dataIndex: "Zip", flex: 1 },
    { text: "ReturnVal", dataIndex: "ReturnVal", flex: 1 },
    { text: "ErrorMessage", dataIndex: "ErrorMessage", flex: 1 },
  ],
});
