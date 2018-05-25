/*
 * File: app/view/CountryModels.js
 *
 * This file was generated by Sencha Architect version 4.2.3.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.5.x Classic library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.5.x Classic. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Arch103.view.CountryModels', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.countrymodels',

    requires: [
        'Arch103.view.CountryModelsViewModel',
        'Arch103.view.CountryModelsViewController',
        'Ext.grid.Panel',
        'Ext.grid.column.Column',
        'Ext.form.field.Display',
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.button.Button',
        'Ext.toolbar.Toolbar'
    ],

    controller: 'countrymodels',
    viewModel: {
        type: 'countrymodels'
    },
    height: 600,
    shrinkWrap: 0,
    width: 800,
    layout: 'border',
    collapsed: false,
    title: 'Country App',

    items: [
        {
            xtype: 'gridpanel',
            flex: 1,
            region: 'center',
            split: true,
            reference: 'list',
            resizable: false,
            title: '',
            forceFit: true,
            bind: {
                store: '{countryModels}'
            },
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'COUNTRY',
                    text: 'Country'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'CURRENCY',
                    text: 'Currency'
                }
            ],
            listeners: {
                select: 'select'
            }
        },
        {
            xtype: 'panel',
            flex: 1,
            region: 'east',
            split: true,
            reference: 'display',
            width: 150,
            layout: 'card',
            bodyBorder: true,
            items: [
                {
                    xtype: 'panel',
                    reference: 'selectMessage',
                    layout: {
                        type: 'vbox',
                        align: 'center',
                        pack: 'center'
                    },
                    items: [
                        {
                            xtype: 'container',
                            flex: 1,
                            html: '"<h1>Please select a record</h1>"'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    reference: 'details',
                    bodyPadding: 10,
                    items: [
                        {
                            xtype: 'displayfield',
                            fieldLabel: 'Country',
                            bind: {
                                value: '{record.COUNTRY}'
                            }
                        },
                        {
                            xtype: 'displayfield',
                            fieldLabel: 'Currency',
                            bind: {
                                value: '{record.CURRENCY}'
                            }
                        }
                    ]
                },
                {
                    xtype: 'form',
                    reference: 'form',
                    bodyPadding: 10,
                    title: 'Edit CountryModel',
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Country',
                            name: 'COUNTRY',
                            enforceMaxLength: true,
                            maxLength: 15
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Currency',
                            name: 'CURRENCY',
                            enforceMaxLength: true,
                            maxLength: 10
                        },
                        {
                            xtype: 'container',
                            padding: 10,
                            layout: {
                                type: 'hbox',
                                align: 'middle',
                                pack: 'center'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    flex: 1,
                                    formBind: true,
                                    itemId: 'saveButton',
                                    margin: 5,
                                    text: 'Save',
                                    listeners: {
                                        click: 'save'
                                    }
                                },
                                {
                                    xtype: 'button',
                                    flex: 1,
                                    itemId: 'cancelButton',
                                    margin: 5,
                                    text: 'Cancel',
                                    listeners: {
                                        click: 'cancelEdit'
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xtype: 'button',
                    text: 'Add',
                    listeners: {
                        click: 'add'
                    }
                },
                {
                    xtype: 'button',
                    text: 'Edit',
                    bind: {
                        hidden: '{!record}'
                    },
                    listeners: {
                        click: 'edit'
                    }
                },
                {
                    xtype: 'button',
                    text: 'Remove',
                    bind: {
                        hidden: '{!record}'
                    },
                    listeners: {
                        click: 'remove'
                    }
                }
            ]
        }
    ]

});