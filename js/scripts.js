// js code to reveal what we do on click
// design toggle
$(document).ready(function(){   
    $("#design-icon").click(function(){
      $("#design-icon").hide();
      $("#design-description").show();
    });
    $("#design-description").click(function(){
      $("#design-description").hide();
      $("#design-icon").show();
    });
})
// development toggle
$(document).ready(function(){   
    $("#dev-icon").click(function(){
      $("#dev-icon").hide();
      $("#development-description").show();
    });
    $("#development-description").click(function(){
      $("#development-description").hide();
      $("#dev-icon").show();
    });
})
    //   product toggle
    $(document).ready(function(){   
      $("#product-icon").click(function(){
        $("#product-icon").hide();
        $("#product-description").show();
      });
      $("#product-description").click(function(){
        $("#product-description").hide();
        $("#product-icon").show();
      
    });
    
    });