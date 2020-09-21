/**
 * This view is an example list of people.
 */
Ext.define('Test.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'Test.store.Personnel',
        'Ext.grid.plugin.Exporter'
    ],

    bbar: [{
        xtype: 'button',
        text: 'export',
        handler: function () {
            var gridRef = Ext.ComponentQuery.query('grid')[0]
            gridRef.saveDocumentAs({
                type: 'xlsx',
                charset: 'Shift-JIS',
                title: 'Sample',
                fileName: 'sample.xlsx'
            });
        }
    }],
    plugins: [{
        ptype: 'gridexporter'
    }],
    
    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
