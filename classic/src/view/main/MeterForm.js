
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
      value: MySharedData.fromDate,
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
      value: MySharedData.toDate,
      editable: false,
      margin: "0 5 0 0",
      allowBlank: false,
    },
    {
      xtype: "datefield",
      itemId: "endEffectiveDate",
      name: "endEffectiveDate",
      fieldLabel: "End&nbsp;Effective&nbsp;Date",
      value: MySharedData.endEffectiveDate,
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
        var meterId = btn.up("meterForm").down("#meterId").getValue();
        var dtStartDate = btn.up("meterForm").down("#dtStartDate").getValue();
        var dtEndDate = btn.up("meterForm").down("#dtEndDate").getValue();
        var dtEndEffectiveDate = btn
          .up("meterForm")
          .down("#endEffectiveDate")
          .getValue();
        var searchType = btn.up("meterForm").down("#searchType").getValue();
        var meterStore = Ext.StoreMgr.get("meterStore");

        /*   // memorize parameters in cookie for exporting spreadsheet
        Ext.state.Manager.setProvider(new Ext.state.CookieProvider());
        Ext.state.Manager.set("meterId", meterId);
        Ext.state.Manager.set("searchType", searchType);
      */
        MySharedData.meterId = meterId;
        MySharedData.searchType = searchType;
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
            //  if ((meterStore.getCount() == 1)) {
            //    //var d = records[0].data;  // here we can find the "No Data Found" object, determine if it is there?
            //    panel.setTitle("No Data Found");
            //  } else {
            panel.setTitle(meterStore.getCount() + " total reads");
            //  }
          },
        });
      },
    },
  ],
});
