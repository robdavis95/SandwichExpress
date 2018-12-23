
$(document).ready(function(){

//Check the browser allows for localStorage and sessionStorage
if (typeof(Storage) != "undefined") {

	$('#payment-section').hide();
	$('#delivery-section').hide();

	//Store values into sessionStorage with the correct name tags marked within the input tags
	$('.stored').blur(function () {
		sessionStorage[$(this).attr('name')] = $(this).val();
	});

	//Output values when button is pressed
	$('#submit').click(function() { 
	
		$('.results').fadeIn("slow"); 
		$('#bread-output').html(sessionStorage["bread"]);
 		$('#filling-output').html(sessionStorage["filling"]);
		$('#quantity-output').html(sessionStorage["quantity"]);	
	});

	//Submit button for drinks
	$('#drink-submit').click(function() { 
	
		$('#drink-output').fadeIn("slow"); 
		$('#drink-output').html(sessionStorage["drink"]);
	});

	//Submit Button for Extras
	$('#extras-submit').click(function() { 
	
		$('#extras-output').fadeIn("slow"); 
		$('#extras-output').html(sessionStorage["extra"]);
	});

	//Hides and Displays different sections of the site
	$('#order-button').click(function() { 
		$('#order-section').show();
		$('#payment-section').hide();
		$('#delivery-section').hide(); 
		$('#order-line').show(); 
	});

	$('#delivery-button').click(function() { 
		$('#order-section').hide();
		$('#delivery-section').show(); 
		$('#payment-section').hide();
		$('#order-line').hide(); 
	});

	$('#payment-button').click(function() { 
		$('#order-section').hide();
		$('#delivery-section').hide(); 
		$('#payment-section').show();
		$('#order-line').hide();

		$('#bread-output').html(sessionStorage["bread"]);
 		$('#filling-output').html(sessionStorage["filling"]);
		$('#quantity-output').html(sessionStorage["quantity"]);	
		$('#address-line-1-output').html(sessionStorage["address-line-1"]);
		$('#address-line-2-output').html(sessionStorage["address-line-2"]);	
		$('#town-city-output').html(sessionStorage["town-city"]);
		$('#postcode-output').html(sessionStorage["postcode"]);
		$('#day-output').html(sessionStorage["day"]);
		$('#month-output').html(sessionStorage["month"]);
		$('#year-output').html(sessionStorage["year"]);			
		$('#offer-code-output').html(sessionStorage["offer-code"]);	
	});


	//Clears session storage and order box
	$('#clear-order').click(function() { 
		$('.results').hide();
		sessionStorage.clear();
	});

	//Sends address to local storage
	$('#submit-address').click(function() { 


		function init() {
		    if (sessionStorage["address-line-1"]) {
		           $('#address-line-1').val(sessionStorage["address-line-1"]);
		        }
		    if (sessionStorage["address-line-2"]) {
		           $('#address-line-2').val(sessionStorage["address-line-2"]);
		        }  
			if (sessionStorage["town-city"]) {
		           $('#town-city').val(sessionStorage["town-city"]);
		        }
		    if (sessionStorage["county"]) {
		           $('#county').val(sessionStorage["county"]);
		        }
		    if (sessionStorage["postcode"]) {
		           $('#postcode').val(sessionStorage["postcode"]);
		        }
		    if (sessionStorage["day"]) {
		           $('#day').val(sessionStorage["day"]);
		        }
		    if (sessionStorage["offer-code"]) {
		           $('#offer-code').val(sessionStorage["offer-code"]);
		        }
			}
	});

} else {
	document.getElementById("result").innerHTML = "Sorry your browser does not support Web Storage. Please Update to a newer browser";
}

});