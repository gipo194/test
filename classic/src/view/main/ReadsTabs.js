Ext.define("Test.view.main.ReadsTabs", {
  extend: "Ext.tab.Panel",
  requires: ["Ext.layout.container.Card"],
  xtype: "readsTabs",

  cls: Ext.baseCSSPrefix + "shadow",

  items: [
    {
      title: "Regular Reads",
      xtype: "meterReadsGrid",
    },
    {
      title: "Skeleton Reads",
      xtype: "skeletonReadsGrid",
      //hidden: true
    },
    {
      title: "Raw Reads",
      xtype: "rawReadsGrid",
      //hidden: true
    },
    {
      title: "AcronymsPanel",
      xtype: "acronymsPanel",
    },
    {
      title: "AccountDetails",
      xtype: "accountDetailsPanel",
    },
  ],
});
