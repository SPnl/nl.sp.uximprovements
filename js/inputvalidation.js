/*
 * Input validation (currently only for postcode / woonplaats
 */

cj(function () {

    // Prevent console errors on IE
    if (!window.console)
        console = { log: function () {
        } };

    $('.crm-edit-address-form').on('keyup', '[id^=postcodenl_postcode_], [id$=city]', function(ev) {
               console.log('keyup in ', $(this).attr('id'));
    });

    $('.crm-edit-address-form').on('change', '[id^=postcodenl_postcode_], [id$=city]', function(ev) {
        console.log('change in ', $(this).attr('id'));
    });
});