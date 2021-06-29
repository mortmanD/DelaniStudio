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
      
    //   form js

    function EmailValidate(useremail) {
        var regex = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        return regex.test(useremail);
      };
      $(document).ready(function(){
        $("#contact-form").submit(function(event){
          var name = $("#name").val();
          var useremail = $("#email").val();
          var message = $("#message").val();
          if (!$("#name").val()){
            alert("Name field can not be empty!")
          }
          else if (!$("#email").val()){
            alert("Email can not be null!");
          }
          if (!EmailValidate($("#email").val())) {
            alert("inputted email is invalid!");
        }
        else if (!$("#message").val()){
          alert("Message can not be empty!");
        }
        else{
            alert ("Thank you for your message " +name);
          }
          $('#contact-form').get(0).reset();
          return false;
                    
        });
      
      });
    
  window.formbutton=window.formbutton||function(event){(formbutton.q=formbutton.q||[]).push(arguments)};
event.preventDefault;
  /* customize formbutton below*/     
  formbutton("create", {
    action: "https://formspree.io/f/xqkwlkoa",
    title: "How can we help?",
    fields: [
      { 
        type: "email", 
        label: "Email:", 
        name: "email",
        required: true,
        placeholder: "your@email.com"
      },
      {
        type: "textarea",
        label: "Message:",
        name: "message",
        placeholder: "What's on your mind?",
      },
      { type: "submit" }      
    ],
    styles: {
      title: {
        backgroundColor: "gray"
      },
      button: {
        backgroundColor: "gray"
      }
    }
  });