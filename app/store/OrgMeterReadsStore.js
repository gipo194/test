Ext.define('Test.store.OrgMeterReadsStore', {
    extend: 'Ext.data.Store',
    alias: 'store.orgMeterReadsStore',
    storeId: 'orgMeterReadsStore',    
    model: 'Test.model.MetadataModel',
    
    autoLoad: false,

    listeners: {
        metachange: function(store, meta) {
       //   var grid = Ext.getCmp('OrgMeterReadsGrid');
       //   grid.reconfigure(store, meta.columns);                
        }
    },
    
    proxy: {
        type: 'jsonp',        
        url: MySharedData.serverUrl + 'OrgMeterReads', 
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
