$document.ready(function() {
				

				  $('.content').hide();
				  //toggle the componenet with class msg_body
				  $('offer').click(function()
				  {
				    $(this).next('.content').slideToggle(200);
				  });

});