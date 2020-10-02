Ext.define("Test.view.main.MeterForm", {
  extend: "Ext.form.Panel",
  xtype: "meterForm",

  title: "Search",
  frame: true,
  // width: 320,
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
      bind: "{searchType}",
      items: [
        {
          boxLabel: "Meter ID",
          name: "searchType",
          inputValue: "Meter Number",
          id: "radioMeter",
          checked: true,
        },
        {
          boxLabel: "Current&nbsp;Contract",
          name: "searchType",
          inputValue: "Contract ID",
          id: "radioContract",
        },
        {
          boxLabel: "Device&nbsp;Location",
          name: "searchType",
          inputValue: "Location Code",
          id: "radioLocation",
        },
        {
          boxLabel: "Contract&nbsp;Account",
          name: "searchType",
          inputValue: "Account Number",
          id: "radioAccount",
        },
        {
          boxLabel: "Premise",
          name: "searchType",
          inputValue: "Premise ID",
          id: "radioPremise",
        },
      ],
    },
    {
      allowBlank: false,
     // fieldLabel: {bind: "{searchType}"}, //TODO: Make this work 
      fieldLabel: "ID",
      itemId: "meterId",
      name: "meterId",
      value: "X150914150",
      emptyText: "meterId",
      msgTarget: "under",
    },
    {
      fieldLabel: "From",
      xtype: "datefield",
      itemId: "dtStartDate",
      name: "dtStartDate",
      pickerAlign: "tl-bl",
      value: new Date(new Date() - 1000 * 60 * 60 * 24 * 100), // 100 days ago in milliseconds
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
      value: new Date(),
      editable: false,
      margin: "0 5 0 0",
      allowBlank: false,
    },
    {
      xtype: "datefield",
      itemId: "endEffectiveDate",
      name: "endEffectiveDate",
      fieldLabel: "End&nbsp;Effective&nbsp;Date",
      value: new Date(4000, 11, 31, 0, 0, 0),
      labelWidth: "auto",
      editable: false,
      allowBlank: false,
    },
    {
      xtype: "checkboxfield",
      name: "chkHistorical",
      boxLabel: "Historical",
      bind: "{isHistorical}"
    },
  ],

  buttons: [
    {
      text: "Search",
      handler: function (btn) {
        var meterId = btn.up("meterForm").down("#meterId").getValue();
        var dtStartDate = btn.up("meterForm").down("#dtStartDate").getValue();
        var dtEndDate = btn.up("meterForm").down("#dtEndDate").getValue();
        var dtEndEffectiveDate = btn.up("meterForm").down("#endEffectiveDate").getValue();
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
            var formPanel = btn.up("meterForm");
            formPanel.setTitle("Count: " + meterStore.getCount());
          },
        });
      },
    },
  ],
});
