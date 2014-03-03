/*
 * Keyboard shortcut handling for civicrm.sp.nl
 * Uses Mousetrap (http://craig.is/killing/mice)
 * Shortcuts are defined in shortcuts.def.js, then parsed here
 */

cj(function () {

    // Prevent console errors on IE
    if (!window.console)
        console = { log: function () {
        } };

    // Function to check if an object is a function
    var isFunction = function (obj) {
        return !!(obj && obj.constructor && obj.call && obj.apply);
    };

    // Parse shortcuts!
    if (spShortcuts !== undefined) {

        cj.each(spShortcuts, function (index, sGroup) {

            if (!('name' in sGroup && 'condition' in sGroup && 'shortcuts' in sGroup)) {
                // console.log('Invalid parameters for shortcut group.');
                return true;
            }

            if (sGroup.condition != '' && cj(sGroup.condition).length == 0) {
                // console.log('Skipping shortcut group ' + sGroup.name + ': condition not met.');
                return true;
            }

            // console.log('Parsing shortcuts group ' + sGroup.name);

            cj.each(sGroup.shortcuts, function (index, shortcut) {

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
                        cj(element).trigger(action);
                    }

                    e.stopPropagation();
                    return false;
                });
            });
        });
    }

    // Enable keyboard navigation for CiviCRM menu (still testing)
    cj('body').keyup(function (e) {
        if (e.keyCode != 13)
            return true;

        var menuIsOpen = cj('#civicrm-menu .activetarget').length > 0;
        if (menuIsOpen) {

            var activeItem = cj('#root-menu-div li.active a');
            if (activeItem)
                location.href = activeItem.attr('href');
        }
    });
});