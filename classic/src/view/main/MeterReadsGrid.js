Ext.define('Test.view.main.MeterReadsGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'meterReadsGrid',

    requires: [
        'Test.store.MeterStore'
    ],

    title: 'MeterReads',

    store: {
        type: 'meterStore'
    },

    columns: [
        { text: 'DIAL KWH',  dataIndex: 'DIAL KWH' },
        { text: 'USAGE KWH', dataIndex: 'USAGE KWH', flex: 1 },
        { text: 'DAILY KW', dataIndex: 'DAILY KW', flex: 1 }
    ]
});