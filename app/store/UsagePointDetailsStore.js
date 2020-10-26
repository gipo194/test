Ext.define("Test.store.UsagePointDetailsStore", {
 
    extend: "Ext.data.Store",
    alias: "store.usagePointDetailsStore",
    storeId: "usagePointDetailsStore",
    model: "Test.model.UsagePointDetails",
  
    autoLoad: false,
  
    proxy: {
      type: "jsonp",
      url: MySharedData.serverUrl + "UsagePointDetails",
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
  