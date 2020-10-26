Ext.define("Test.store.SkeletonStore", {
  extend: "Ext.data.Store",
  alias: "store.skeletonStore",
  storeId: "skeletonStore",
  model: "Test.model.MetadataModel",

  autoLoad: false,

  listeners: {
    metachange: function (store, meta) {
      var grid = Ext.getCmp("skeletonReadsGrid");
      grid.reconfigure(store, meta.columns);
    },
  },

  proxy: {
    type: "jsonp",
    url: MySharedData.serverUrl + "SkeletonReads",
    reader: {
      type: "json",
      rootProperty: "data",
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
