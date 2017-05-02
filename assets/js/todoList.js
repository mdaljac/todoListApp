$(document).ready(function($) {
	
	$("li, .delete-btn").on("click", function(){

		//delete
		if ($(this).hasClass('delete-btn')){

			$listItem = $(this).parent("li");
			$listItem.css("text-decoration", "line-through");
			$listItem.slideUp(300, function(){
					$(this).remove();
			});
		}
		//toggle strike through
		else{
			$(this).toggleClass('strike');
		}

	});


});