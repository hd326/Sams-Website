/*var amt = "";
                            
                            function bdrmsValue(){
                                var x = document.getElementById('bdrms').value;
                                if (x == "one_bd") {
                                    var bdrm = "one";
                                }
                                if (x == "two_bd") {
                                    var bdrm = "two";
                                }
                                if (x == "three_bd") {
                                    var bdrm = "three";
                                }
                                if (x == "four_bd") {
                                    var bdrm = "four";
                                }
                                if (x == "five_bd") {
                                    var bdrm = "five";
                                }
                                if (x == "six_bd") {
                                    var bdrm = "six";
                                }
                                if (x == "seven_bd") {
                                    var bdrm = "seven";
                                }
                                console.log(bdrm);
                                return bdrm;
                            }
                            
                            function bathsValue(){
                                var x = document.getElementById('baths').value;
                                if (x == "one_bath") {
                                    var bath = "one";
                                }
                                if (x == "two_bath") {
                                    var bath = "two";
                                }
                                if (x == "three_bath") {
                                    var bath = "three";
                                }
                                if (x == "four_bath") {
                                    var bath = "four";
                                }
                                if (x == "five_bath") {
                                    var bath = "five";
                                }
                                if (x == "six_bath") {
                                    var bath = "six";
                                }
                                if (x == "seven_bath") {
                                    var bath = "seven";
                                }
                                console.log(bath);
                                return bath;
                            }
                            */

                            /*var bdrmsVal = bdrms.options[bdrms.selectedIndex].value;*/
                            
                            
                            /*var bdrms = document.getElementById('bdrms').value;
                            var baths = document.getElementById('baths').value;
                            var bdrmsVal = bdrms.options[bdrms.selectedIndex].value;
                            function updateBdrms(x){
                            var bdrmsVal = x;
                            */
                            /*var bdrmsVal = bdrms.options[bdrms.selectedIndex].value;*/
                        
                            
                            /*function updateBdrms(x){
                                
                                var bdrmsVal = x;
    
                            }*/

/*function totalValue(){
                                var x = document.getElementById('baths').value;
                                var y = document.getElementById('bdrms').value;
                                var z = document.getElementById('subtotal');
                                var total = "";
                                if (x == "one_bd" && y == "one_bath") {
                                    var total = "85.00";
                                    z.innerHTML = "85.00";
                                }
                                if (x == "one_bd" && y == "two_bath") {
                                    var total = "97.00";
                                }
                                console.log(total);
                                return total;
                            }*/

$(function(){
    var prices = {
        'United States':15,
        'United Kingdom':30
    };
    $('#bdrms, #baths').on('change', function(){
        if(this.name == 'Quantity'){
            $('input[name="Visitors"]').val(+this.value*1000);
            $('input[name="Price"]')
            .val(prices[$('#select2-basic').val()] ? (prices[$('#select2-basic').val()]*this.value) :  (15*this.value));
        }
        else if(this.name == 'Country'){
            $('input[name="Price"]')
            .val(prices[this.value] /*always*/ ? (prices[this.value]*$('#select3-basic').val()) :  (15*$('#select3-basic').val()));
        }
    });
});