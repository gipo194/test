Ext.define("Test.store.Nameplate", {
    extend: "Ext.data.Store",
    alias: "store.nameplateStore",
    storeId: "nameplateStore",
    model: "Test.model.Nameplate",
  
    autoLoad: false,
  
    proxy: {
      type: "jsonp",
      url: MySharedData.serverUrl + "NamePlate",
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
  