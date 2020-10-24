Ext.define("Test.store.MeterDetailsStore", {
    extend: "Ext.data.Store",
    alias: "store.meterDetailsStore",
    storeId: "meterDetailsStore",
    model: "Test.model.MeterDetails",
  
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
  