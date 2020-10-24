Ext.define("Test.store.CommInfo", {
    extend: "Ext.data.Store",
    alias: "store.commInfoStore",
    storeId: "commInfoStore",
    model: "Test.model.commInfo",
  
    autoLoad: false,
  
    proxy: {
      type: "jsonp",
      url: MySharedData.serverUrl + "CommInfo",
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
  