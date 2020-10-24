Ext.define("Test.store.MeterDetailsStore", {
  // see http://sqewtmdlt01v02/MPARestService/Help/Api/GET-api-MeterDetails_meterId_productAssignId_stmtAcct_usagePoint_endEffectiveDate
    extend: "Ext.data.Store",
    alias: "store.meterDetailsStore",
    storeId: "meterDetailsStore",
    model: "Test.model.Meter",
  
    autoLoad: false,
  
    proxy: {
      type: "jsonp",
      url: MySharedData.serverUrl + "MeterDetails",
      reader: {
        type: "json",
      },
      headers: {
        Accept: "application/json",
        Origin: "http://sqewtmdlt01v02/MDL",
      },
      actionMethods: {
        read: "GET",
      },
    },
  });
  