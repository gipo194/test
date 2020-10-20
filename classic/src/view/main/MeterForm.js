Ext.define("Test.view.main.MeterForm", {
  extend: "Ext.form.Panel",
  xtype: "meterForm",

  title: "Search",
  frame: true,
  bodyPadding: 10,

  defaultType: "textfield",

  defaults: {
    anchor: "100%",
    labelWidth: 120,
  },

  items: [
    {
      xtype: "radiogroup",
      fieldLabel: "Search&nbsp;Type",
      layout: "fit",
      simpleValue: true,
      id: "searchType",
      bind: { value: "{searchType}" },
      listeners: {
        // dynamically bind the caption of the Meter ID
        // to the selected search type
        change: function (field, newval) {
          var formPanel = field.up("meterForm");
          formPanel.down("#meterId").labelEl.update(newval);
          MySharedData.searchType = newval; // memorize in Global variable
        },
      },
      items: [
        {
          boxLabel: "Meter ID",
          inputValue: "Meter Number",
          id: "radioMeter",
        },
        {
          boxLabel: "Current&nbsp;Contract",
          inputValue: "Contract ID",
          id: "radioContract",
          disabled: true,
        },
        {
          boxLabel: "Device&nbsp;Location",
          inputValue: "Location Code",
          id: "radioLocation",
          disabled: true,
        },
        {
          boxLabel: "Contract&nbsp;Account",
          inputValue: "Account Number",
          id: "radioAccount",
          disabled: true,
        },
        {
          boxLabel: "Premise",
          inputValue: "Premise ID",
          id: "radioPremise",
          disabled: true,
        },
      ],
    },
    {
      allowBlank: false,
      fieldLabel: "dynamically set",
      itemId: "meterId",
      id: "meterIdField",
      name: "meterId",
      value: MySharedData.meterId,
      emptyText: "",
    },
    {
      fieldLabel: "From",
      xtype: "datefield",
      itemId: "dtStartDate",
      name: "dtStartDate",
      pickerAlign: "tl-bl",
      value: MySharedData.dtStartDate,
      editable: false,
      margin: "0 5 0 0",
      allowBlank: false,
    },
    {
      fieldLabel: "To",
      xtype: "datefield",
      itemId: "dtEndDate",
      name: "dtEndDate",
      pickerAlign: "tl-bl",
      value: MySharedData.dtEndDate,
      editable: false,
      margin: "0 5 0 0",
      allowBlank: false,
    },
    {
      xtype: "datefield",
      itemId: "endEffectiveDate",
      name: "endEffectiveDate",
      fieldLabel: "End&nbsp;Effective&nbsp;Date",
      value: MySharedData.dtEndEffectiveDate,
      pickerAlign: "tl-bl",
      margin: "0 5 0 0",
      editable: false,
      allowBlank: false,
    },
    {
      xtype: "checkboxfield",
      name: "chkHistorical",
      boxLabel: "Historical",
      bind: "{isHistorical}",
    },
  ],

  buttons: [
    {
      text: "Search",
      handler: function (btn) {
        var form = btn.up("meterForm");

        // Scrape values off of the form:
        var meterId = form.down("#meterId").getValue();
        var dtStartDate = form.down("#dtStartDate").getValue();
        var dtEndDate = form.down("#dtEndDate").getValue();
        var dtEndEffectiveDate = form.down("#endEffectiveDate").getValue();
        var searchType = form.down("#searchType").getValue();
        // Memorize
        MySharedData.meterId = meterId;
        MySharedData.searchType = searchType;
        MySharedData.dtStartDate = dtStartDate;
        MySharedData.dtEndDate = dtEndDate;
        MySharedData.dtEndEffectiveDate = dtEndEffectiveDate;

        var meterStore = Ext.StoreMgr.get("meterStore");
        meterStore.load({
          scope: this,
          params: {
            meterId: meterId,
            dtStartDate: dtStartDate,
            dtEndDate: dtEndDate,
            dtEndEffectiveDate: dtEndEffectiveDate,
          },
          callback: function (records, operation, success) {
            var panel = btn
              .up("meterForm")
              .up("meterHolder")
              .down("meterReadsGrid");
            panel.setTitle("Regular Reads (" + meterStore.getCount() + ")");
          },
        });
        var skeletonStore = Ext.StoreMgr.get("skeletonStore");
        skeletonStore.load({
          scope: this,
          params: {
            meterId: meterId,
            dtStartDate: dtStartDate,
            dtEndDate: dtEndDate,
          },
          callback: function (records, operation, success) {
            var panel = btn
              .up("meterForm")
              .up("meterHolder")
              .down("skeletonReadsGrid");
            panel.setTitle("Skeleton Reads (" + skeletonStore.getCount() + ")");
          },
        });

        var rawReadsStore = Ext.StoreMgr.get("rawReadsStore");
        rawReadsStore.load({
          scope: this,
          params: {
            meterId: meterId,
            dtStartDate: dtStartDate,
            dtEndDate: dtEndDate,
          },
          callback: function (records, operation, success) {
            var panel = btn
              .up("meterForm")
              .up("meterHolder")
              .down("rawReadsGrid");
            panel.setTitle("Raw Reads (" + rawReadsStore.getCount() + ")");
          },
        });
      },
    },
  ],
});
