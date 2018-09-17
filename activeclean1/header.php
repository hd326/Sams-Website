<!DOCTYPE html>
<html lang="">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
    <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css">
    <link rel="stylesheet" href="css/jquery-ui.css">
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/jquery-ui.js"></script>
    <title></title>
</head>
<script>
    var basePrice = 85.00;
    var itemPrice = "";
    
    function sliderChange(val) {
        document.getElementById('bed_display').innerHTML = val;
    }
    
    function sliderChange2(val) {
        document.getElementById('bath_display').innerHTML = val;
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
    
    /*
    
    function changePrice(val) {
        if (val == 1) {
            var homePrice = 0;
            document.getElementById('price').innerHTML = basePrice + getPrice();
        }
        
        if (val == 2) {
            var homePrice = 10;
            document.getElementById('price').innerHTML = basePrice + homePrice;
        }
        
        if (val == 3) {
            var homePrice = 35;
            document.getElementById('price').innerHTML = basePrice + homePrice;
        }
        
        if (val == 4) {
            var homePrice = 69;
            document.getElementById('price').innerHTML = basePrice + homePrice;
        }
        
        if (val == 5) {
            var homePrice = 96;
            document.getElementById('price').innerHTML = basePrice + homePrice;
        }
        
        if (val == 6) {
            var homePrice = 122;
            document.getElementById('price').innerHTML = basePrice + homePrice;
        }
    }
    
    function changePrice2(val2) {
        var x = document.getElementById('price');
        
        if (val2 == 1) {
            var homePrice2 = 0;
            document.getElementById('price').innerHTML = basePrice + homePrice2;
        }
        if (val2 == 2) {
            var homePrice2 = 25;
            document.getElementById('price').innerHTML = basePrice + homePrice2;
        }
        if (val2 == 3) {
            var homePrice2 = 50;
            document.getElementById('price').innerHTML = basePrice + homePrice2;
        }
        if (val2 == 4) {
            var homePrice2 = 75;
            document.getElementById('price').innerHTML = basePrice + homePrice2;
        }
        if (val2 == 5) {
            var homePrice2 = 100;
            document.getElementById('price').innerHTML = basePrice + homePrice2;
        }
        if (val2 == 6) {
            var homePrice2 = 125;
            document.getElementById('price').innerHTML = basePrice + homePrice2;
        }
    }
    
    */
    
    
    function openNav() {
        document.getElementById("sidenav").style.width = "260px";
    }

    /* Set the width of the side navigation to 0 */
    function closeNav() {
        document.getElementById("sidenav").style.width = "0";
    }
</script>
<script>
    $(function() {
            $('#form_occurence .form_percentage button').on('click', function() {
                $('#form_occurence .form_percentage button').removeClass('active');
                $(this).addClass('active');
            });
        
        /*
        
        how to connect input range data to another variable.
        
        */
        /*
            $(".slider-40").slider({
                value: 1,
                min: 1,
                max: 6,
                step: 1,
                slide: function(event, ui) {
                    $('.choice_display').html(ui.value);
                    $("#price").val(ui.value);
                }
            });

            $("#price").change(function() {
                $(".slider-40").slider('value', $(this).val());
            });
        */
            
            
            
        });
    </script>

<body>

    <!-- the form -->
    <div id="sidenav">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <a href="#">Maid Service</a>
        <div id="closebtn"></div>
    </div>


    <div id="hero">

        <header>
            <div id="header">
                <div id="h_logo"><img src="images/logo2.jpg"></div>
                <div id="h_menu">
                    <nav>
                        <ul>
                            <li>MAID SERVICE</li>
                            <li>CONTACT US</li>
                            <li>BOOK MY CLEAN</li>
                            <li>
                                <div id="icon" onclick="openNav()">
                                    <div id="hamburger"></div>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>

        