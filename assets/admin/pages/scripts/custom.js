/**
Custom module for you to write your own javascript functions
**/
var Custom = function () {

    // private functions & variables
	var regBtnEnabler = function() {
    	alert('huahua');
    	document.getElementById("register-submit-btn").disabled = false;
    }
    
    // public functions
    return {

        //main function
        init: function () {
            //initialize here something.            
        },

        //some helper function
        regBtnEnable: function () {
            regBtnEnabler();
        }

    };


}();

/***
Usage
***/
//Custom.init();
//Custom.doSomeStuff();