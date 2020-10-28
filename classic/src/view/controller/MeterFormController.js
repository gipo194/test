// Please move this function to wherever it belongs
function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

Ext.define("Test.view.controller.MeterFormController", {
  extend: "Ext.app.ViewController",
  alias: "controller.meterForm",

  onSearchClick: function (btn) {
    var form = btn.up("meterForm");

    // Scrape values off of the form:
    var meterId = form.down("#meterId").getValue();
    var combo = form.down("#period").getValue();
    var dtStartDate = form.down("#dtStartDate").getValue();
    var dtEndDate = form.down("#dtEndDate").getValue();
    var dtEndEffectiveDate = form.down("#endEffectiveDate").getValue();
    var searchType = form.down("#searchType").getValue();
    var isHistorical = form.down("#chkHistorical").getValue();

    // Memorize
    MySharedData.meterId = meterId;
    MySharedData.searchType = searchType;
    MySharedData.dtStartDate = dtStartDate;
    MySharedData.dtEndDate = dtEndDate;
    MySharedData.dtEndEffectiveDate = dtEndEffectiveDate;
    MySharedData.isHistorical = isHistorical;
    var route = "";
    if (!isHistorical) {
      // build the route string
      route = "Reads/" + meterId + "/" + combo;
      if (combo == 3) {
        // custom date range
        route =
          route + "/" + formatDate(dtStartDate) + "/" + formatDate(dtEndDate);
      }
    }
    else
    {
        route = "AdvanceMeterHistory/" + meterId;
    }
   
    var mStore = Ext.data.StoreManager.lookup("meterStore");
    mStore.removeAll();
    mStore = mStore.getProxy().setUrl(MySharedData.serverUrl + route);

    var meterStore = Ext.StoreMgr.get("meterStore");
    meterStore.load({
      scope: this,
      callback: function (records, operation, success) {
        var panel = btn
          .up("meterForm")
          .up("meterHolder")
          .down("meterReadsGrid");
        if (success) {
          panel.setTitle("Regular Reads (" + records.length + ")");
        } else {
          panel.setTitle("Regular Reads (FAIL)");
        }
      },
    });
    /*
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
*/
    /*
    var usagePointDetails = Ext.StoreMgr.get("usagePointDetailsStore"); //FIX - doesn't find the store
    usagePointDetails.load({
      scope: this,
      params: {
        meterId: meterId,
        productAssignId: null,
        stmtAcct: null,
        usagePoint: null,
        endEffectiveDate: dtEndEffectiveDate,
      },
    });
    */
  },
});
