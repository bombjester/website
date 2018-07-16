"$"

$(function(){
    $(window).scroll(function() {
    	var scrollTop = $(window).scrollTop();
      	var name_position = $("#test").offset().top;
      	var name_height = $("#test").height();
      	var toCross_position = $("#one").offset().top;
      	var fixed_position = $("#sub").offset().top;
      	var projects_position = $("#two").offset().top;

		if (name_position < toCross_position - name_height- 110) {
			$("#test").removeClass("opacity");

		} 
		else{
			$("#test").addClass("opacity");	
		}
  		

		if (fixed_position < toCross_position) {
		  $("#sub").removeClass("opacity");
	  
		} 
		else{
		  	$("#sub").addClass("opacity");
		}
		if(projects_position < scrollTop){
			$("#header-wrap").css({"width": "1px"});
		}
		else{
			$("#header-wrap").css({"width": ""});
		}

    });
});