$(function() {

	//Menu btn
	$('.nav_icon').click(function(){
		$(this).toggleClass('open');
		$(".site_overlay").toggleClass('active');
		});
/*	$('.nav_item a').click(function () {
		$('.top_menu').removeClass('active');
		$('.nav_icon').removeClass('open');
		$(".site_overlay").removeClass('active');
	}).append('<span>');*/
	$(".toggle_menu").click(function () {
		if($(".top_menu").is(":visible")){
			$('.top_menu').removeClass('active');
			$('.top_menu li a').removeClass('fadeInUp animated');
			$(".site_overlay").removeClass('active');
		} else {
			$('.top_menu').addClass('active');
			$('.top_menu li a').addClass('fadeInUp animated');
			$(".site_overlay").addClass('active');
		}
/*		$('.top_menu').click(function () {
			$(this).removeClass('active');
			$('.nav_icon').removeClass('open');
			$(".site_overlay").removeClass('active');
		});*/
	});
	$('.site_overlay').click(function () {
		$('.top_menu').removeClass('active');
		$('.nav_icon').removeClass('open');
		$('.top_menu li a').removeClass('fadeInUp animated');
		$(this).removeClass('active');
	});
	//Form validation

$(document).ready(function(){

 // when lose focus
 $('input#user_name, input#user_email, input#user_question, textarea#message_text').unbind().blur(function(){
     var id = $(this).attr('id');
     var val = $(this).val();
   // switch all id and take our id
   switch(id) {
         // validation of "name"
         case 'user_name':
            var rv_name = /^[a-zA-Zа-яА-Я]+$/;

            // If longer than 2, not empty
            // add class .not_error,
            // Success!

            if(val.length > 2 && val != '' && rv_name.test(val))
            {
               $(this).addClass('not_error'); 
               $(this).next('.error-box').text('Good')
                                         .css('color','green')
                                         .animate({'paddingLeft':'10px'},400)
                                         .animate({'paddingLeft':'5px'},400);
            }

          // Else we remove .not-error and add .error
          // show error text

            else
            {
               $(this).removeClass('not_error').addClass('error');
               $(this).next('.error-box').html('Field "Name" required<br>')
                                          .css('color','red')
                                          .animate({'paddingLeft':'10px'},400)
                                          .animate({'paddingLeft':'5px'},400);
            }
        break;

       // Validate email
       case 'user_email':
           var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
           if(val != '' && rv_email.test(val))
           {
              $(this).addClass('not_error');
              $(this).next('.error-box').text('Good')
                                        .css('color','green')
                                        .animate({'paddingLeft':'10px'},400)
                                        .animate({'paddingLeft':'5px'},400);
           }
           else
           {
              $(this).removeClass('not_error').addClass('error');
              $(this).next('.error-box').html('Field "Email" required<br>Field must contain a valid email address<br>')
                                         .css('color','red')
                                         .animate({'paddingLeft':'10px'},400)
                                         .animate({'paddingLeft':'5px'},400);
           }
       break;


      // Validate question
      case 'user_question':
          if(val != '' && val.length < 100)
          {
             $(this).addClass('not_error');
             $(this).next('.error-box').text('Good')
                                       .css('color','green')
                                       .animate({'paddingLeft':'10px'},400)
                                       .animate({'paddingLeft':'5px'},400);
          }
          else
          {
             $(this).removeClass('not_error').addClass('error');
             $(this).next('.error-box').html('This field is mandatory for filling')
                                       .css('color','red')
                                       .animate({'paddingLeft':'10px'},400)
                                       .animate({'paddingLeft':'5px'},400);
          }
      break;
      //Validate text
      case 'message_text':
          if(val != '' && val.length < 5000)
          {
             $(this).addClass('not_error');
             $(this).next('.error-box').text('Good')
                                       .css('color','green')
                                       .animate({'paddingLeft':'10px'},400)
                                       .animate({'paddingLeft':'5px'},400);
          }
          else
          {
             $(this).removeClass('not_error').addClass('error');
             $(this).next('.error-box').html('This field is mandatory for filling')
                                       .css('color','red')
                                       .animate({'paddingLeft':'10px'},400)
                                       .animate({'paddingLeft':'5px'},400);
          }
      break;

   } // end switch(...)

 }); // end blur()

  }); // end script
function checkForm() {
		var id = $('#user_email').attr('id');
	    var val = $('#user_email').val();
	    var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
	    if(val != '' && rv_email.test(val))
	           {
	              $('#user_email').addClass('not_error');
	              $('#user_email').next('.error-box').text('Good')
	                                        .css('color','green')
	                                        .animate({'paddingLeft':'10px'},400)
	                                        .animate({'paddingLeft':'5px'},400);
	           }
	           else
	           {
	              $('#user_email').removeClass('not_error').addClass('error');
	              event.preventDefault();
	              return false;
	              $('#user_email').next('.error-box').html('Field "Email" required<br>Field must contain a valid email address<br>')
	                                         .css('color','red')
	                                         .animate({'paddingLeft':'10px'},400)
	                                         .animate({'paddingLeft':'5px'},400);
	           }
	}

//E-mail Ajax Send
	$("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display','flex').hide().fadeIn();
			/*setTimeout(function() {
				$(th).find('.success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);*/
		});
		return false;
	});
});
$(window).resize(function () {
	$('.nav_icon').removeClass('open');
	$('.top_menu').removeClass('active');
	$('.site_overlay').removeClass('active');
});
$('#drop_down_wrapper').click(function(event){
	event.preventDefault();
	$('.sub_nav').toggleClass('active');
	$(this).toggleClass('active')
});
var hellopreloader = document.getElementById("hellopreloader_preload");function fadeOutnojquery(el){el.style.opacity = 1;var interhellopreloader = setInterval(function(){el.style.opacity = el.style.opacity - 0.05;if (el.style.opacity <=0.05){ clearInterval(interhellopreloader);hellopreloader.style.display = "none";}},16);}window.onload = function(){setTimeout(function(){fadeOutnojquery(hellopreloader);},1000);};