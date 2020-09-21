Ext.define('Test.view.main.MeterReadsGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'meterReadsGrid',

    requires: [
        'Test.store.MeterStore'
    ],

    plugins: 'gridexporter',
    
    title: 'MeterReads',

    store: {
        type: 'meterStore'
    },

    columns: [
        { text: 'READ TIME',  dataIndex: 'READ TIME', flex: 1 },
        { text: 'ENTRY_DATE',  dataIndex: 'ENTRY_DATE', flex: 1 },
        { text: 'READ SRC',  dataIndex: 'READ SRC', flex: 1 },
        { text: 'DIAL KWH',  dataIndex: 'DIAL KWH', flex: 1 },
        { text: 'USAGE KWH', dataIndex: 'USAGE KWH', flex: 1 },
        { text: 'DAILY KW', dataIndex: 'DAILY KW', flex: 1 },
        { text: 'READ FLAG',  dataIndex: 'READ FLAG', flex: 1 }
    ]
});