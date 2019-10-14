var UIAlertDialogApi = function () {

    var handleDialogs = function() {

        
        
            $('#user_info_form_confirm').click(function(){
                bootbox.confirm("Do you want to proceed to update your particulars?", function(result){
					if(result){
						$('#user_info_form_submit').removeAttr('disabled');
						$('#user_info_form_submit').click();
					}
                   //alert("Confirm result: "+result);
                }); 
            });
			
			//change_pw_form_confirm
			$('#change_pw_form_confirm').click(function(){
                bootbox.confirm("Do you want to proceed to update your password?", function(result){
					if(result){
						$('#change_pw_form_submit').removeAttr('disabled');
						$('#change_pw_form_submit').click();
					}
                   //alert("Confirm result: "+result);
                }); 
            });
			
            
			$('#renew_plan_btn').click(function(){
                bootbox.confirm("Do you want to proceed to renew your plan?", function(result){
					if(result){
						window.location.replace("pr_user_plan.jsp");
					}
                }); 
            });
			
			$('#change_plan_btn').click(function(){
                bootbox.confirm("Do you want to proceed to change your plan?", function(result){
                   if(result){
						window.location.replace("pr_user_plan.jsp");
					}
                }); 
            });

    }

    var handleAlerts = function() {
        
        $('#alert_show').click(function(){

            Metronic.alert({
                container: $('#alert_container').val(), // alerts parent container(by default placed after the page breadcrumbs)
                place: $('#alert_place').val(), // append or prepent in container 
                type: $('#alert_type').val(),  // alert's type
                message: $('#alert_message').val(),  // alert's message
                close: $('#alert_close').is(":checked"), // make alert closable
                reset: $('#alert_reset').is(":checked"), // close all previouse alerts first
                focus: $('#alert_focus').is(":checked"), // auto scroll to the alert after shown
                closeInSeconds: $('#alert_close_in_seconds').val(), // auto close after defined seconds
                icon: $('#alert_icon').val() // put icon before the message
            });

        });

    }

    return {

        //main function to initiate the module
        init: function () {
            handleDialogs();
            handleAlerts();
        }
    };

}();