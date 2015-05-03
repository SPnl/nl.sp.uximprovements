/*
 * Input validation (currently only for postcode / woonplaats)
 */

cj(function ($) {

    $('#addressBlock, .crm-address-block').onFirst('keyup', '[id^=postcodenl_postcode_]', function(ev) {
        var postcode = $(this).val().replace(/^([0-9]{4})([a-zA-Z]{2})$/, "$1 $2").toUpperCase();
        if(postcode != $(this).val()) {
            $(this).val(postcode);
            $(this).closest('table').find('[id$=postal_code]').val(postcode);
        }
    });

    $('#addressBlock, .crm-address-block').onFirst('change', '[id$=city]', function(ev) {
        var city = $(this).val().toUpperCase();
        $(this).val(city);
    });
});