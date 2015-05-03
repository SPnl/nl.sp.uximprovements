/*
 * Keyboard shortcut handling for civicrm.sp.nl
 * Uses Mousetrap (http://craig.is/killing/mice)
 * Shortcuts are defined in shortcuts.def.js, then parsed here
 */

cj(function ($) {

    // Prevent console errors on IE
    if (!window.console)
        console = { log: function () {
        } };

    // Function to check if an object is a function
    var isFunction = function (obj) {
        return !!(obj && obj.constructor && obj.call && obj.apply);
    };

    // Parse shortcuts that are defined in shortcuts.defs.js
    if (spShortcuts !== undefined) {

        $.each(spShortcuts, function (index, sGroup) {

            if (!('name' in sGroup && 'condition' in sGroup && 'shortcuts' in sGroup)) {
                // console.log('Invalid parameters for shortcut group.');
                return true;
            }

            if (sGroup.condition != '' && $(sGroup.condition).length == 0) {
                // console.log('Skipping shortcut group ' + sGroup.name + ': condition not met.');
                return true;
            }

            // console.log('Parsing shortcuts group ' + sGroup.name);

            $.each(sGroup.shortcuts, function (index, shortcut) {

                var keys = shortcut[0];
                var element = shortcut[1];
                var action = shortcut[2];

                // This script binds to a shortcut using Mousetrap.
                // A shortcut can either trigger an action on an element (e.g. focus, click)
                // or execute a custom function.

                Mousetrap.bind(keys, function (e) {

                    if (isFunction(action)) {

                        // console.log('Shortcut ' + keys + ' pressed: triggers function.');
                        action();

                    } else if (action == 'goto') {

                        // console.log('Shortcut ' + keys + ' pressed: triggers redirect.');
                        location.href = element;

                    } else {

                        // console.log('Shortcut ' + keys + ' pressed: triggers ' + action + ' event on element ' + element + '.');
                        $(element).trigger(action);
                    }

                    e.stopPropagation();
                    return false;
                });
            });
        });
    }

    // Global behaviour for enter and esc keys
    $('body').on('keyup', function (e) {
        var validKeycodes = [13, 27];
        if(validKeycodes.indexOf(e.keyCode) == -1) {
            return true;
        }

        // Enable keyboard navigation for CiviCRM menu, press enter to select item
        if (e.keyCode == 13 && $('#civicrm-menu .activetarget').length > 0) {

            var activeItem = $('#root-menu-div li.active a');
            if (activeItem.length > 0) {
                location.href = activeItem.eq(0).attr('href');
            }
        }

        // If focus is on an input field ESC removes focus, which enables the user to use other shortcuts
        if(e.keyCode == 27) {

            var focused = document.activeElement;
            if (!focused || focused == document.body)
                focused = null;
            else if (document.querySelector)
                focused = document.querySelector(":focus");

            if($(focused).is("input, select, textarea")) {
                $(focused).blur();
            }
        }
    });
});