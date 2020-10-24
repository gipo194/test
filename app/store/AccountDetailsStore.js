Ext.define("Test.store.AccountDetailsStore", {
    extend: "Ext.data.Store",
    alias: "store.accountDetailsStore",
    storeId: "accountDetailsStore",
    model: "Test.model.AccountDetails",
  
    autoLoad: false,
  
    proxy: {
      type: "jsonp",
      url: MySharedData.serverUrl + "AccountDetails",
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
  