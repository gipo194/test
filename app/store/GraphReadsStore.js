Ext.define('Test.store.GraphReadsStore', {
    extend: 'Ext.data.Store',
    alias: 'store.graphReadsStore',
    storeId: 'graphReadsStore',    
    model: 'Test.model.MetadataModel',
    
    autoLoad: false,

    listeners: {
        metachange: function(store, meta) {
       //   var grid = Ext.getCmp('GraphReadsGrid');
       //   grid.reconfigure(store, meta.columns);                
        }
    },
    
    proxy: {
        type: 'jsonp',        
        url: MySharedData.serverUrl + 'GraphReads', 
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
