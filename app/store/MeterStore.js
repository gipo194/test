Ext.define('Test.store.MeterStore', {
    extend: 'Ext.data.Store',

    alias: 'store.meterStore',
    storeId: 'meterStore',

    model: 'Test.model.MeterModel',

    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: MySharedData.serverUrl + 'GetMeterReads',
        reader: {
            type: 'json'
        },
        headers: {
            'Accept': 'application/json'
        },
        actionMethods: {
            read: 'GET'
        }
    }
});
