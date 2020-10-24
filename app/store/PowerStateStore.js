Ext.define("Test.store.PowerStateStore", {
    extend: "Ext.data.Store",
    alias: "store.powerStateStore",
    storeId: "powerStateStore",
    model: "Test.model.PowerState",
  
    autoLoad: false,
  
    proxy: {
      type: "jsonp",
      url: MySharedData.serverUrl + "PowerState",
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
  