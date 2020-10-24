Ext.define("Test.view.controller.MeterFormController", {
  extend: "Ext.app.ViewController",
  alias: "controller.meterForm",

  onSearchClick: function (btn) {
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
        var panel = btn.up("meterForm").up("meterHolder").down("rawReadsGrid");
        panel.setTitle("Raw Reads (" + rawReadsStore.getCount() + ")");
      },
    });

    var accountDetailsStore = Ext.StoreMgr.get("accountDetailsStore");
    accountDetailsStore.load({
      scope: this,
      params: {
        meterId: meterId,
        productAssignId: null,
        stmtAcct: null,
        usagePoint: null,
        endEffectiveDate: dtEndEffectiveDate,
      },
    });
  },
});
