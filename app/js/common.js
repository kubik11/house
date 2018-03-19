$(function() {
	//  Event to hide search field
	$('.cross').click(function(){
		$(this).parent().fadeOut(function(){
			$('.manu-search li').each(function(	i, elem){
				if(i!== 1){
					$(elem).fadeIn();
				}	
				console.log(elem);
			});
		});
	});
	$('.to-search').click(function(){
		$('.manu-search li').each(function(){
			$(this).css('display', 'none');
		});
		$('.search-input').fadeIn();
	});

});
