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

    // build the period route suffix
    var periodSuffix = "/" + combo;
    if (combo == 3) {
      // custom date range
      periodSuffix =
        "/" + formatDate(dtStartDate) + "/" + formatDate(dtEndDate);
    }

    var route = "";

    // begin region Regular Reads
    if (isHistorical) {
      route = "AdvanceMeterHistory/" + meterId + periodSuffix;
    } else {
      route = "Reads/" + meterId + periodSuffix;
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
    // End Region Regular Reads

    // Begin region Skeleton
    route = "SkeletonReads/" + meterId + periodSuffix;

    var skelStore = Ext.data.StoreManager.lookup("skeletonStore");
    skelStore.removeAll();
    skelStore = skelStore.getProxy().setUrl(MySharedData.serverUrl + route);

    var skeletonStore = Ext.StoreMgr.get("skeletonStore");
    skeletonStore.load({
      scope: this,
      callback: function (records, operation, success) {
        var panel = btn
          .up("meterForm")
          .up("meterHolder")
          .down("skeletonReadsGrid");
        if (success) {
          panel.setTitle("Skeleton Reads (" + skeletonStore.getCount() + ")");
        } else {
          panel.setTitle("Skeleton Reads (FAIL)");
        }
      },
    });
    // End Region Skeleton

    // Begin Region Raw Reads
    route = "RawReads/" + meterId + periodSuffix;
    var rawStore = Ext.data.StoreManager.lookup("rawReadsStore");
    rawStore.removeAll();
    rawStore = rawStore.getProxy().setUrl(MySharedData.serverUrl + route);

    var rawReadsStore = Ext.StoreMgr.get("rawReadsStore");
    rawReadsStore.load({
      scope: this,
      callback: function (records, operation, success) {
        var panel = btn.up("meterForm").up("meterHolder").down("rawReadsGrid");
        if (success) {
          panel.setTitle("Raw Reads (" + rawReadsStore.getCount() + ")");
        } else {
          panel.setTitle("Raw Reads (FAIL)");
        }
      },
    });
    // end region Raw Reads
    /*
    // Begin region Graph Reads
    route = "GraphReads/" + meterId + periodSuffix;
    var graphStore = Ext.data.StoreManager.lookup("graphReadsStore");
    graphStore.removeAll();
    graphStore = graphStore.getProxy().setUrl(MySharedData.serverUrl + route);

    var graphReadsStore = Ext.StoreMgr.get("graphReadsStore");
    graphReadsStore.load({
      scope: this,
      callback: function (records, operation, success) {
        var panel = btn.up("meterForm").up("meterHolder").down("graphReadsGrid");
        panel.setTitle("Graph Reads (" + graphReadsStore.getCount() + ")");
      },
    });
    // End region Graph Reads
*/
    // begin region Account Details

    route = "AccountDetails/" + meterId + "/" + formatDate(dtEndEffectiveDate);
    var adStore = Ext.data.StoreManager.lookup("accountDetailsStore");
    adStore.removeAll();
    adStore = adStore.getProxy().setUrl(MySharedData.serverUrl + route);

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
    // end region Account Details

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
