$(document).ready(function($) {

	$(".todos").delegate("li, .delete-btn", "click", function(){

		$this = $(this);

		//delete
		if ($this.hasClass('delete-btn')){

			$listItem = $this.parent("li");
			$listItem.css("text-decoration", "line-through");
			$listItem.slideUp(300, function(){
					$(this).remove();
			});
		}
		//toggle strike through
		else{
			$this.toggleClass('strike');
		}
	});

	$("#addNew").on("keypress", function(event){
		if(event.which === 13){

			$this = $(this);
			$newItem = $this.val();
			$(".todos").append('<li><span class="fa fa-trash-o delete-btn" aria-hidden="true"></span>' + $newItem + '</li>');
			$this.val("");

		}
	});

	$(".addNewDisplay").on("click", function(){
		$("#addNew").fadeToggle();
	});
});