$(document).ready(function(){
    $('.potfulio-list').isotope({
		
	});
	  
    
    $(".filter-project li").on('click', function(){
        $(".filter-project li").removeClass("active");
        $(this).addClass("active");
        var selector = $(this).attr("data-filter");
        $(".potfulio-list").isotope({
            filter: selector,
            
        });
    });
    
    
});