var FormValidation = function () {
	
	// basic validation
    var handleValidateUserInfoForm = function() {
        // for more info visit the official plugin documentation: 
            // http://docs.jquery.com/Plugins/Validation

            var form1 = $('#user_info_form');
            var error1 = $('.alert-danger', form1);
            var success1 = $('.alert-success', form1);

            form1.validate({
                errorElement: 'span', //default input error message container
                errorClass: 'help-block help-block-error', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                ignore: "",  // validate all fields including form hidden input
                messages: {
                    select_multi: {
                        maxlength: jQuery.validator.format("Max {0} items allowed for selection"),
                        minlength: jQuery.validator.format("At least {0} items must be selected")
                    }
                },
                rules: {
                    fullname: {
                        minlength: 1,
						maxlength: 255,
                        required: false,
						require_from_group: [1, ".user_info_form-group"]
                    },
                    email: {
						minlength: 5,
						maxlength: 255,
                        required: false,
						require_from_group: [1, ".user_info_form-group"],
                        email: true
                    },
					companyname: {
						minlength: 2,
						maxlength: 255,
						required: false,
						require_from_group: [1, ".user_info_form-group"]
					}
                },

                invalidHandler: function (event, validator) { //display error alert on form submit              
                    success1.hide();
                    error1.show();
                    Metronic.scrollTo(error1, -200);
                },

                highlight: function (element) { // hightlight error inputs
                    $(element).closest('.form-group').addClass('has-error'); // set error class to the control group
                },

                unhighlight: function (element) { // revert the change done by hightlight
                    $(element).closest('.form-group').removeClass('has-error'); // set error class to the control group
                },

                success: function (label) {
                    label.closest('.form-group').removeClass('has-error'); // set success class to the control group
                },

                submitHandler: function (form) {
                    //success1.show();
                    //error1.hide();
					form.submit();
                }
            });
    }
	
	
	// basic validation
    var handleChangePasswordForm = function() {
        // for more info visit the official plugin documentation: 
            // http://docs.jquery.com/Plugins/Validation

            var form2 = $('#change_pw_form');
            var error2 = $('.alert-danger', form2);
            var success2 = $('.alert-success', form2);

            form2.validate({
                errorElement: 'span', //default input error message container
                errorClass: 'help-block help-block-error', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                ignore: "",  // validate all fields including form hidden input
                messages: {
                    select_multi: {
                        maxlength: jQuery.validator.format("Max {0} items allowed for selection"),
                        minlength: jQuery.validator.format("At least {0} items must be selected")
                    }
                },
                rules: {
                    currentpw: {
                        minlength: 8,
						maxlength: 24,
                        required: true,
						require_from_group: [1, ".change_pw_form-group"]
                    },
                    newpw: {
						minlength: 8,
						maxlength: 24,
                        required: true,
						require_from_group: [1, ".change_pw_form-group"]
                    },
					newpwagain: {
						minlength: 8,
						maxlength: 24,
						required: true,
						require_from_group: [1, ".change_pw_form-group"],
						equalTo: "#form_control_5"
					}
                },

                invalidHandler: function (event, validator) { //display error alert on form submit              
                    success2.hide();
                    error2.show();
                    Metronic.scrollTo(error2, -200);
                },

                highlight: function (element) { // hightlight error inputs
                    $(element).closest('.form-group').addClass('has-error'); // set error class to the control group
                },

                unhighlight: function (element) { // revert the change done by hightlight
                    $(element).closest('.form-group').removeClass('has-error'); // set error class to the control group
                },

                success: function (label) {
                    label.closest('.form-group').removeClass('has-error'); // set success class to the control group
                },

                submitHandler: function (form) {
                    //success1.show();
                    //error1.hide();
					//alert("SUCCESS");
					form.submit();
                }
            });
    }


	

    return {
        //main function to initiate the module
        init: function () {
			handleValidateUserInfoForm();
			handleChangePasswordForm();
        }

    };

}();