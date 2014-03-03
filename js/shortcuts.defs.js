/*
 * Use this file to define all keyboard shortcuts.
 * Shortcuts are defined in an array here, then parsed and bound in shortcuts.js
 * Shortcut groups are defined as follows:
 * - name: group name
 * - condition: element that needs to exist for the group to be enabled
 * - shortcuts: a nested array of shortcuts containing key combination, element and action
 * A shortcut can either trigger an action on an element (e.g. focus, click)
 * or execute a custom function.
 */

var spShortcuts = [

    /* GENERAL */
    {
        'name': 'general',
        'condition': '',
        'shortcuts': [
            ['shift+f', '#quickSearch #sort_name_navigation', 'focus'],
            ['shift+m', '', function() {
                cj('.menumain.crm-Search').trigger('click').addClass('activetarget');
            }],
            ['shift+h', '/', 'goto'],
            ['ctrl+shift+f', '/civicrm/contact/search/advanced?reset=1', 'goto'],
            ['shift+n', '/civicrm/contact/add?reset=1&ct=Individual', 'goto']
        ]
    },

    /* HOME PAGE */
    {
        'name': 'home',
        'condition': '#civicrm-dashboard',
        'shortcuts': [
            ['f', '#spqs-form .spqs-id', 'focus']
        ]
    },

    /* CONTACT PAGE */
    {
        'name': 'contact-page',
        'condition': '.crm-contact-page',
        'shortcuts': [
            ['a', '.crm-actions-ribbon #crm-contact-actions-link', 'click'],
            ['e', '.crm-actions-ribbon .edit.button span', 'click'],
            ['d', '.crm-actions-ribbon .delete.button span', 'click'],
            ['tab', '', function () {
                var newtab = cj('.crm-contact-tabs-list .ui-state-active').next();
                if (!newtab || newtab.length == 0)
                    newtab = cj('.crm-contact-tabs-list li').first();
                newtab.find('a').trigger('click');
            }],
            ['shift+tab', '', function () {
                var newtab = cj('.crm-contact-tabs-list .ui-state-active').prev();
                if (!newtab || newtab.length == 0)
                    newtab = cj('.crm-contact-tabs-list li').last();
                newtab.find('a').trigger('click');
            }],
            ['n', '.crm-contact-page a[accesskey="N"] span', 'click']
        ]
    },

    /* FORMS (tested on contact edit form) */
    {
        'name': 'forms',
        'condition': '',
        'shortcuts': [
            ['shift+s', '.crm-button-type-upload:first input', 'click'],
            ['ctrl+shift+s', '.crm-button-type-upload:last input', 'click'],
            [['esc', 'shift+esc'], '.crm-button-type-cancel input', 'click']
        ]
    },
];