Ext.define("Test.store.AdvanceStmtAcctHistoryStore", {
  // see http://sqewtmdlt01v02/MPARestService/Help/Api/GET-api-AdvanceStmtAcctHistory_statementAccountId 
    extend: "Ext.data.Store",
    alias: "store.advanceStmtAcctHistoryStore",
    storeId: "advanceStmtAcctHistoryStore",
    model: "Test.model.AdvanceStmtAcctHistory",
  
    autoLoad: false,
  
    proxy: {
      type: "jsonp",
      url: MySharedData.serverUrl + "AdvanceStmtAcctHistory",
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
  