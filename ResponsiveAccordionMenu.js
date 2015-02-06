$(window).load(function() {
	
	var divs = $('.expandContent'),
	content = divs.children('.expandedContent');
	
	// hide all divs initially
	content.hide();
	$('#SelectMenu').find(":selected").css({'background-color':'#7961aa','color':'#fff'});
	// drop down menu - on change show the selected div
	$('#SelectMenu').on('change', function() {
	  content.hide();
	  showDiv(this.value);
	  //change background of selected item (hack for IE styles)
	  $(this).find(":selected").css({'background-color':'#7961aa','color':'#fff'});
	});

	// function that shows the selected div
	function showDiv(divID) {
		var thisContent = $('#'+divID).find('.expandedContent')
		if ($(thisContent).is(':visible')) {
			thisContent.slideUp("slow");
			$('#'+divID).find('.header .expand img').attr('src', 'plus.png');
		}
		else {
			content.not(thisContent).slideUp("slow", function() {
				$('#'+divID).parent().find('.header .expand img').attr('src', 'plus.png');
			});
			thisContent.slideDown("slow", function() {
				$('#'+divID).find('.header .expand img').attr('src', 'minus.png');
				// scroll to selected div
				$('html, body').animate({
					scrollTop: $("#"+divID).offset().top
				}, 1000);
				// change drop down menu's selected option  
				$('#SelectMenu').val(divID);
			});
		}
	}	
	
	// on click show the selected div
	divs.click(function() {
		showDiv($(this).attr('id'));
	});
	
});