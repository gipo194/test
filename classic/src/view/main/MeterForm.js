Ext.define('Test.view.main.MeterForm', {
    extend: 'Ext.form.Panel',
    xtype: 'meterForm',

    title: 'Form',
    frame: true,
    // width: 320,
    bodyPadding: 10,

    defaultType: 'textfield',

    defaults: {
        anchor: '100%',
        labelWidth: 120
    },

    items: [
        {
            allowBlank: false,
            fieldLabel: 'Meter ID',
            itemId: 'meterId',
            name: 'meterId',
            emptyText: 'meterId',
            msgTarget: 'under'
        },
        {
            fieldLabel: 'From',
            xtype: 'datefield',
            itemId: 'dtStartDate',
            name: 'dtStartDate',
            pickerAlign: 'tl-bl',
            value: new Date(),
            editable: false,
            margin: '0 5 0 0',
            allowBlank: false
        },
        {
            fieldLabel: 'To',
            xtype: 'datefield',
            itemId: 'dtEndDate',
            name: 'dtEndDate',
            pickerAlign: 'tl-bl',
            value: new Date(),
            editable: false,
            margin: '0 5 0 0',
            allowBlank: false
        }

    ],

    buttons: [
        {
            text: 'Submit',
            handler: function (btn) {
                var meterId = btn.up('meterForm').down('#meterId').getValue();
                var dtStartDate = btn.up('meterForm').down('#dtStartDate').getValue();
                var dtEndDate = btn.up('meterForm').down('#dtEndDate').getValue();

                var meterStore = Ext.StoreMgr.get('meterStore');

                store.load(
                    {
                        scope: this,
                        params:
                        {
                            meterId: meterId,
                            dtStartDate: dtStartDate,
                            dtEndDate: dtEndDate
                        },
                        callback: function (records, operation, success) {
                            var formPanel = btn.up('meterForm');
                            formPanel.setTitle("Count: " + meterStore.getCount());
                        }
                    });

            }
        }
    ]
});