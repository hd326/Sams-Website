function sliderChange(val) {
    document.getElementById('bed_display').innerHTML = val;
}

function sliderChange2(val) {
    document.getElementById('bath_display').innerHTML = val;
}

function openNav() {
    document.getElementById("sidenav").style.width = "260px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}

function showValue(newValue, resultDiv) {
    document.getElementById(resultDiv).innerHTML = newValue;
    updateSum();
}

function updateSum() {
    var sliderOneValue = +document.getElementById('sliderBarOne').value;
    var sliderTwoValue = +document.getElementById('sliderBarTwo').value;
    var sliderThreeValue = +document.getElementById('sliderBarThree').value;
    document.getElementById('sum').innerHTML = sliderOneValue + sliderTwoValue + sliderThreeValue;
}

$(function () {
    $('#form_occurence .form_percentage button').on('click', function () {
        $('#form_occurence .form_percentage button').removeClass('active');
        $(this).addClass('active');
    });

    $('#icon').on('click', function () {
        $('#sidenav').toggleClass('sidetoggle');
        $('body').toggleClass('bodytoggle');
    });

    function closesideNav() {
        var side = document.querySelector('#sidenav');
        var sideNavMargin = window.getComputedStyle(side).getPropertyValue('margin-right');
        if (sideNavMargin === '0px') {
            $('#sidenav').toggleClass('sidetoggle');
            $('body').toggleClass('bodytoggle');
        }
    }
    //var sideNavWidth = $('#sidenav').width();
    $(window).resize(function () {
        closesideNav();
    });
});

$(function () {
    $('.questions_line').on('click', function () {
        $('.questions_info', this).slideToggle();
        $('#text', this).toggleClass('q_active');
        $('#button', this).toggleClass('q_button_active');
    });
});
