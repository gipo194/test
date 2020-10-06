Ext.define('Test.store.MeterStore', {
    extend: 'Ext.data.Store',

    alias: 'store.meterStore',
    storeId: 'meterStore',
    
    model: 'Test.model.MeterModel',
    
    autoLoad: false,

    listeners: {
        metachange: function(store, meta) {
            alert('Store metachange event fired');  // TODO: get this to fire            
        }
    },
    
    proxy: {
        type: 'jsonp',        
        url: MySharedData.serverUrl + 'ReadsMetadata', 
        listeners: {
            metachange: function(proxy, meta) {
                alert('Proxy metachange event fired');  // TODO: get this to fire            
            }
        },
        
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
