
// Clean up URL parameters:
var q = location.search
  .toUpperCase()
  .replace("METERID", "MeterID")
  .replace("FROM", "From")
  .replace("TO", "To")
  .replace("END", "End");
var o = Ext.Object.fromQueryString(q);

// memorize parameters if they are specified:
if (o.MeterID != null) MySharedData.meterId = o.MeterID;
if (o.From != null) MySharedData.dtStartDate = o.From;
if (o.To != null) MySharedData.dtEndDate = o.To;
if (o.End != null) MySharedData.dtEndEffectiveDate = o.End;

/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 */
Ext.define("Test.view.main.Main", {
  extend: "Ext.tab.Panel",
  xtype: "app-main",

  requires: [
    "Ext.plugin.Viewport",
    "Ext.window.MessageBox",

    "Test.view.main.MainController",
    "Test.view.main.MainModel",
    "Test.view.main.List",
  ],

  controller: "main",
  viewModel: "main",

  ui: "navigation",

  tabBarHeaderPosition: 1,
  titleRotation: 0,
  tabRotation: 0,

  header: {
    layout: {
      align: "stretchmax",
    },
    title: {
      bind: {
        text: "{name}",
      },
      flex: 0,
    },
    iconCls: "fa-cubes",
    height: 80,
  },

  tabBar: {
    flex: 1,
    layout: {
      align: "stretch",
      overflowHandler: "none",
    },
  },

  headerPosition: "top",

  defaults: {
    tabConfig: {
      iconAlign: "top",
      textAlign: "center",
      align: "stretch",
    },
  },

  items: [
    {
      title: "Meter Reads",
      iconCls: "fa-book-reader",
      xtype: "meterHolder",
    },
    {
      title: "On Demand Read",
      iconCls: "fa-exclamation",
      hidden: false,
      html: "On Demand Read (and RVA button) goes here.",
    },
    {
      title: "Meter Info",
      iconCls: "fa-info-circle",
      hidden: false,
      html: "Meter Information goes here.",
    },
    {
      title: "Flags",
      iconCls: "fa-flag-checkered",
      hidden: false,
      html: "Flags go here.",
    },
  ],
});
