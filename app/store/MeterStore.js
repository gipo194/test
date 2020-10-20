Ext.define('Test.store.MeterStore', {
    extend: 'Ext.data.Store',    
    alias: 'store.meterStore',
    storeId: 'meterStore',    
    model: 'Test.model.MeterModel',
    
    autoLoad: false,

    listeners: {
        metachange: function(store, meta) {
          var grid = Ext.getCmp('meterReadsGrid');
          grid.reconfigure(store, meta.columns);                
        }
    },
    
    proxy: {
        type: 'jsonp',        
        url: MySharedData.serverUrl + 'Reads',       
       
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
