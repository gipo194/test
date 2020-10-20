Ext.define('Test.store.RawReadsStore', {
    extend: 'Ext.data.Store',
    alias: 'store.rawReadsStore',
    storeId: 'rawReadsStore',    
    model: 'Test.model.MeterModel',
    
    autoLoad: false,

    listeners: {
        metachange: function(store, meta) {
          var grid = Ext.getCmp('rawReadsGrid');
          grid.reconfigure(store, meta.columns);                
        }
    },
    
    proxy: {
        type: 'jsonp',        
        url: MySharedData.serverUrl + 'RawReads', 
        reader: {
            type: 'json',
            rootProperty: "data"
        },
        headers: {
            Accept: 'application/json',
            Origin: "http://sqewtmdlt01v02/MDL"
        },
        actionMethods: {
           read: 'GET'
        },
    }
});
