Ext.define("Test.store.ClientRates", {
    extend: "Ext.data.Store",
    alias: "store.clientRatesStore",
    storeId: "clientRatesStore",
    model: "Test.model.ClientRates",
  
    autoLoad: false,
  
    proxy: {
      type: "jsonp",
      url: MySharedData.serverUrl + "ClientRate",
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
  