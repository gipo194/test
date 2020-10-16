Ext.define('Test.store.MeterStore', {
    extend: 'Ext.data.Store',

    alias: 'store.meterStore',
    storeId: 'meterStore',
    
    model: 'Test.model.MeterModel',
    
    autoLoad: false,

    listeners: {
        metachange: function(store, meta) {
            // Refresh Meter Reads grid
          var grid = Ext.getCmp('meterReadsGrid');
          grid.reconfigure(store, meta.columns);                
        }
    },
    
    proxy: {
        type: 'jsonp',        
        url: MySharedData.serverUrl + 'ReadsMetadata', 
        /* Reads Tab:           
                by Meter:           GetMeterReads
                by ProdAssign:      GetMetersFromProductAssignment
                by ContractAcct:    GetMetersFromStatementAccount
                by UsagePoint:      GetMetersFromUsagePoint
                by Premise:         GetPremiseTokenSearch
           Raw Reads Tab:           GetRawReads
           Skeleton Reads Tab:      GetSkelMeterReads           
         */
       
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
