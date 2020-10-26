Ext.define('Test.store.FlagsStore', {
    extend: 'Ext.data.Store',
    alias: 'store.FlagsStore',
    storeId: 'FlagsStore',    
    model: 'Test.model.MetadataModel',
    
    autoLoad: false,

    listeners: {
        metachange: function(store, meta) {
       //   var grid = Ext.getCmp('FlagsGrid');
       //   grid.reconfigure(store, meta.columns);                
        }
    },
    
    proxy: {
        type: 'jsonp',        
        url: MySharedData.serverUrl + 'Flags', 
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
