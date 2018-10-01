var bedroom_values = [{
    "slider_room_number": "1",
    "bedroom_values_text": "1",
    "slider_l27_value": "12",
    "slider_bedroom_price": "87"
}, {
    "slider_room_number": "2",
    "bedroom_values_text": "1",
    "slider_l27_value": "13",
    "slider_bedroom_price": "99"
}, {
    "slider_room_number": "3",
    "bedroom_values_text": "1",
    "slider_l27_value": "14",
    "slider_bedroom_price": "129"
}, {
    "slider_room_number": "2",
    "bedroom_values_text": "2",
    "slider_l27_value": "13",
    "slider_bedroom_price": "99"
}, {
    "slider_room_number": "3",
    "bedroom_values_text": "2",
    "slider_l27_value": "14",
    "slider_bedroom_price": "129"
}, {
    "slider_room_number": "4",
    "bedroom_values_text": "2",
    "slider_l27_value": "15",
    "slider_bedroom_price": "159"
}, {
    "slider_room_number": "3",
    "bedroom_values_text": "3",
    "slider_l27_value": "14",
    "slider_bedroom_price": "129"
}, {
    "slider_room_number": "4",
    "bedroom_values_text": "3",
    "slider_l27_value": "15",
    "slider_bedroom_price": "159"
}, {
    "slider_room_number": "3",
    "bedroom_values_text": "3",
    "slider_l27_value": "14",
    "slider_bedroom_price": "129"
}, {
    "slider_room_number": "4",
    "bedroom_values_text": "3",
    "slider_l27_value": "15",
    "slider_bedroom_price": "159"
}, {
    "slider_room_number": "5",
    "bedroom_values_text": "3",
    "slider_l27_value": "5",
    "slider_bedroom_price": "189"
}, {
    "slider_room_number": "4",
    "bedroom_values_text": "4",
    "slider_l27_value": "15",
    "slider_bedroom_price": "159"
}, {
    "slider_room_number": "5",
    "bedroom_values_text": "4",
    "slider_l27_value": "5",
    "slider_bedroom_price": "189"
}, {
    "slider_room_number": "4",
    "bedroom_values_text": "5",
    "slider_l27_value": "15",
    "slider_bedroom_price": "169"
}, {
    "slider_room_number": "5",
    "bedroom_values_text": "5",
    "slider_l27_value": "5",
    "slider_bedroom_price": "189"
}, {
    "slider_room_number": "6",
    "bedroom_values_text": "5",
    "slider_l27_value": "6",
    "slider_bedroom_price": "219"
}];

console.log(bedroom_values);

var bathroom_values = [{
    "slider_bathroom_number": "1",
    "bathroom_values_text": "1",
    "slider_bathroom_l27_value": "1"
}, {
    "slider_bathroom_number": "2",
    "bathroom_values_text": "2",
    "slider_bathroom_l27_value": "2"
}, {
    "slider_bathroom_number": "3",
    "bathroom_values_text": "3",
    "slider_bathroom_l27_value": "3"
}, {
    "slider_bathroom_number": "4",
    "bathroom_values_text": "4",
    "slider_bathroom_l27_value": "4"
}, {
    "slider_bathroom_number": "5",
    "bathroom_values_text": "5",
    "slider_bathroom_l27_value": "5"
}, {
    "slider_bathroom_number": "6",
    "bathroom_values_text": "6",
    "slider_bathroom_l27_value": "6"
}];

console.log(bathroom_values);

jQuery(document).ready(function () {
    // slider front start
    jQuery('#ui-slider1').slider({
        orientation: "horizontal",
        animate: "fast",
        range: "min",
        min: 1,
        step: 1,
        max: 6,
        value: 1,
        slide: function (e, t) {

            var input = jQuery('input[name="service_id"]');
            switch (t.value) {

                case 1:
                    input.val(12)
                    break;
                case 2:
                    input.val(13)
                    break;
                case 3:
                    input.val(14)
                    break;
                case 2:
                    input.val(13)
                    break;
                case 3:
                    input.val(14)
                    break;
                case 4:
                    input.val(15)
                    break;
                case 3:
                    input.val(14)
                    break;
                case 4:
                    input.val(15)
                    break;
                case 3:
                    input.val(14)
                    break;
                case 4:
                    input.val(15)
                    break;
                case 5:
                    input.val(5)
                    break;
                case 4:
                    input.val(15)
                    break;
                case 5:
                    input.val(5)
                    break;
                case 4:
                    input.val(15)
                    break;
                case 5:
                    input.val(5)
                    break;
                case 6:
                    input.val(6)
                    break;

                default:
                    input.val(1)
            }

            for (var i = 0; i < bedroom_values.length; i++) {

                if (input.val() == bedroom_values[i].slider_l27_value) {

                    jQuery('[data-bedroom-message]').val(bedroom_values[i].bedroom_values_text);
                }


            }

            jQuery('#ui-slider__amount1').val(t.value);
        }


    });
    jQuery('#ui-slider2').slider({
        orientation: "horizontal",
        animate: "fast",
        range: "min",
        min: 1,
        step: 1,
        max: 6,
        value: 1,
        slide: function (e, t) {

            var input = $('input[name="pricing_param_quantity"]');
            switch (t.value) {


                case 1:
                    input.val(1)
                    break;

                case 2:
                    input.val(2)
                    break;

                case 3:
                    input.val(3)
                    break;

                case 4:
                    input.val(4)
                    break;

                case 5:
                    input.val(5)
                    break;

                case 6:
                    input.val(6)
                    break;

                default:
                    input.val(1)
            }

            for (var i = 0; i < bathroom_values.length; i++) {

                if (input.val() == bathroom_values[i].slider_bathroom_l27_value) {

                    $('[data-bathroom-message]').val(bathroom_values[i].bathroom_values_text);
                }

            }

            jQuery('#ui-slider__amount2').val(t.value);
        }
    });
});
// slider counter

var BEDROOM_RATES = {
    b1: 87,
    b2: 99,
    b3: 129,
    b2: 99,
    b3: 129,
    b4: 159,
    b3: 129,
    b4: 159,
    b3: 129,
    b4: 159,
    b5: 189,
    b4: 159,
    b5: 189,
    b4: 169,
    b5: 189,
    b6: 219,
};
var PER_BATHROOM = 25;
jQuery(window).ready(function () {
    updatePrice();
    jQuery('input[type=radio]').on('change', updatePrice);
    jQuery('#ui-slider1, #ui-slider2').on('slidechange', updatePrice);
}); // doc ready

function updatePrice() {
    var perc_off = 0.0,
        bedrooms = jQuery('#ui-slider1').slider('option', 'value'),
        bathrooms = jQuery('#ui-slider2').slider('option', 'value'),
        freq_id = jQuery('input[type=radio]:checked').attr('id'),
        total_price = 0;
    total_price = BEDROOM_RATES['b' + bedrooms];
    total_price += bathrooms * PER_BATHROOM;
    if (freq_id == 'r1') {
        // one time
        perc_off = 0
    } else if (freq_id == 'r2') {
        // every week
        perc_off = 0.2
    } else if (freq_id == 'r3') {
        // every two weeks
        perc_off = 0.15
    } else if (freq_id == 'r4') {
        // every four weeks
        perc_off = 0.05
    }


    // subtract frequency discount
    total_price *= (1 - perc_off);
    // set total price on button
    jQuery("#total-price").html(parseFloat(total_price).toFixed(2));
}


jQuery(document).on('change', '#ui-slider__amount1', function (e) {
    console.log(jQuery(this).val());
});
// } );
// slider front end
