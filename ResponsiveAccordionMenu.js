$(window).load(function() {
	
	var divs = $('.expandContent'),
	content = divs.children('.expandedContent');
	
	// hide all divs initially
	content.hide();
	$('#SelectMenu, #SelectMenu2').find(":selected").css({'background-color':'#7961aa','color':'#fff'});
	// drop down menu - on change show the selected div
	$('#SelectMenu, #SelectMenu2').on('change', function() {
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
			$('img.expandImage').attr('src', 'plus.png');
		}
		else {
			content.not(thisContent).slideUp("slow", function() {
				$('img.expandImage').attr('src', 'plus.png');
			});
			thisContent.slideDown("slow", function() {
				$('#'+divID).find('.header .expand img').attr('src', 'minus.png');
				// scroll to selected div
				$('html, body').animate({
					scrollTop: $("#"+divID).offset().top
				}, 1000);
				// change drop down menu to the default text  
				$('#SelectMenu,#SelectMenu2').val('Select a State');
			});
		}
	}
		
	// on click show the selected div
	divs.click(function() {
		showDiv($(this).attr('id'));
	});
});