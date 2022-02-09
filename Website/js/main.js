(function ($) {
    "use strict";

    
    /*==================================================================
    [ Validate ]*/
    
    // if subscribe button is clicked
    
    $('.contact1-form-btn').on('click',function(){
        var check = true;

        var email = $('#susemail');
        if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) 
        {
            showValidate(email);
            check=false;
        }
        
        if (check == true) {
            // The below ajax will be resposible for adding the provided email address to the table database on clicking on subscribe buttton!

            // $.ajax
			// ({ 
			// 	url: 'https://my-azure-newsletter-app.azurewebsites.net/api/HttpTrigger?action=subscribe&email='+'$(email).val()',
			// 	type: 'get',
			// 	success: function(result)
			// 	{
			// 		//$('#susmessage').text(result)

            //         swal({
            //             icon: 'success',
            //             title: 'Hi, User',
            //             text: result,
            //             button:'Done'
            //         }).then(function(){
            //             window.location="#";
            //         });
			// 	}
			// });
            
            swal({
                            icon: 'warning',
                            title: 'Hi, User Sorry for the inconvenience!',
                            text: 'My Azure for Students credit has run out, thus the storage account, as well as the accompanying HttpTrigger and Timer Functions, are no longer available! As a result, we are unable to process your request at this time!',
                            button:'Got it!',
                            closeOnClickOutside: false,
                        }).then(function(){
                            window.location="index.html";
                        });
        }



        return check;
    });

    
    // if unsubscribe button is clicked
    
    $('.contact2-form-btn').on('click',function(){
        var check = true;

        var email = $('#unsusemail');
        if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            showValidate(email);
            check=false;
        }
        if (check == true) {
            // The below ajax will be resposible for removing the provided email address on clicking on unsubscribe 
            // $.ajax
			// ({ 
			// 	url: 'https://my-azure-newsletter-app.azurewebsites.net/api/HttpTrigger?action=unsubscribe&email='+$(email).val(),
			// 	type: 'get',
			// 	success: function(result)
			// 	{
			// 		// $('#unsusmessage').text(result)
            //         swal({
            //             icon: 'success',
            //             title: 'Hi, User',
            //             text: result,
            //             button:'Done'
            //         }).then(function(){
            //             window.location="#";
            //         });
			// 	}
			// });
            swal({
                icon: 'warning',
                            title: 'Hi, User Sorry for the inconvenience!',
                            text: 'My Azure for Students credit has run out, thus the storage account, as well as the accompanying HttpTrigger and Timer Functions, are no longer available! As a result, we are unable to process your request at this time!',
                            button:'Got it!',
                            closeOnClickOutside: false,
                        }).then(function(){
                            window.location="index.html";
            });

        }

        return check;
    });

    


    $('.validate-form .input1').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);
