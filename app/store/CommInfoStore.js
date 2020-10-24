Ext.define("Test.store.CommInfoStore", {
  // see: http://sqewtmdlt01v02/MPARestService/Help/Api/GET-api-CommInfo_meterId 
    extend: "Ext.data.Store",
    alias: "store.commInfoStore",
    storeId: "commInfoStore",
    model: "Test.model.CommInfo",
  
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
  