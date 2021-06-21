// js code to reveal what we do on click
// design toggle
$(document).ready(function(){     
    $("#design-icon").click(function(){
      $("#design-icon").hide();
      $("#design-description").show();
   
    $("#design-description").click(function(){
      $("#design-description").hide();
      $("#design-icon").show();
    }); });
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
    // portifolio js to change item on hoover

    $(document).ready(function () {
        $("#portifolio_1").hover(
          function () {
            $("#portifolio_1 .solid-border").show();
          },
          function () {
            $("#portifolio_1 .solid-border").hide();
          },
          
        );
      });
      
      
      $(document).ready(function () {
        $("#portifolio_2").hover(
          function () {
            $("#portifolio_2 .solid-border").show();
          },
          function () {
            $("#portifolio_2 .solid-border").hide();
          },
          
        );
      });
      
      $(document).ready(function () {
        $("#portifolio_3").hover(
          function () {
            $("#portifolio_3 .solid-border").show();
          },
          function () {
            $("#portifolio_3 .solid-border").hide();
          },
          
        );
      });
      
      $(document).ready(function () {
        $("#portifolio_4").hover(
          function () {
            $("#portifolio_4 .solid-border").show();
          },
          function () {
            $("#portifolio_4 .solid-border").hide();
          },
          
        );
      });
      
      $(document).ready(function () {
        $("#portifolio_5").hover(
          function () {
            $("#portifolio_5 .solid-border").show();
          },
          function () {
            $("#portifolio_5 .solid-border").hide();
          },
          
        );
      });
      $(document).ready(function () {
        $("#portifolio_6").hover(
          function () {
            $("#portifolio_6 .solid-border").show();
          },
          function () {
            $("#portifolio_6 .solid-border").hide();
          },
          
        );
      });
      $(document).ready(function () {
        $("#portifolio_7").hover(
          function () {
            $("#portifolio_7 .solid-border").show();
          },
          function () {
            $("#portifolio_7 .solid-border").hide();
          },
          
        );
      });
      $(document).ready(function () {
        $("#portifolio_8").hover(
          function () {
            $("#portifolio_8 .solid-border").show();    
      
          },
          function () {
            $("#portifolio_8 .solid-border").hide();
          }
        );
      });
      