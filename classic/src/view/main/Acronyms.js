Ext.define("Test.view.main.Acronyms", {
  extend: "Ext.grid.Panel",
  xtype: "acronymsGrid",

  requires: ["Test.store.Acronyms", "Ext.grid.plugin.Exporter"],

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

  title: "Acronyms View",

  store: {
    type: "acronyms",
  },

  columns: [
    { text: "name", dataIndex: "name" },
    { text: "column", dataIndex: "column" },
    { text: "columnSpan", dataIndex: "columnSpan" },
    { text: "fontWeight", dataIndex: "fontWeight"},
    { text: "text", dataIndex: "text" },
    { text: "tooltip", dataIndex: "tooltip", flex: 1 },
  ],

  listeners: {
    afterrender: function (eOpts) {
      view = this.getView();
      view.tip = Ext.create("Ext.tip.ToolTip", {
        target: view.el,
        delegate: view.itemSelector,
        trackMouse: true,
        renderTo: Ext.getBody(),
        listeners: {
          beforeshow: function updateTipBody(tip) {
            tip.update("Tooltip!");
          },
        },
      });
    },
  },
});
