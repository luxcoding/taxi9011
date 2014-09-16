head.ready(function() {
	$('.scroll-pane').jScrollPane();

	$(window).resize(function(){
	  if ($(".scroll-pane").length > 0){
	    $('.scroll-pane').jScrollPane();
	  }
	});
});