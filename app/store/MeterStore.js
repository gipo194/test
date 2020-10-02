Ext.define('Test.store.MeterStore', {
    extend: 'Ext.data.Store',

    alias: 'store.meterStore',
    storeId: 'meterStore',

    model: 'Test.model.MeterModel',

    autoLoad: false,

    proxy: {
        type: 'jsonp',
        url: MySharedData.serverUrl + 'Reads', //TODO: Depends upon which search type.
        /* MetersFromProductAssignment, MetersFromStatementAccount, MetersFromUsagePoint, MetersInLocation*/ 
        reader: {
            type: 'json'
        },
        headers: {
            Accept: 'application/json',
            Origin: "http://sqewtmdlt01v02/MDL"
        },
        actionMethods: {
           // read: 'POST'
           read: 'GET'
        }
    }
});
