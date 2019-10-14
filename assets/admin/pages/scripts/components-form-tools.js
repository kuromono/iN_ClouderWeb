var ComponentsFormTools = function () {

    var handleBootstrapTouchSpin = function() {
        
        $("#interval_globalpref").TouchSpin({
            buttondown_class: 'btn green',
            buttonup_class: 'btn green',
            min: 0,
            max: 18000,
            step: 0.5,
            decimals: 1,
            boostat: 5,
            maxboostedstep: 10,
            postfix: 'seconds'
        });

		$("#interval_prefchk").TouchSpin({
            buttondown_class: 'btn blue',
            buttonup_class: 'btn blue',
            min: 0,
            max: 18000,
            step: 0.5,
            decimals: 1,
            boostat: 5,
            maxboostedstep: 10,
            postfix: 'seconds'
        });

		$("#interval_keylog").TouchSpin({
            buttondown_class: 'btn blue',
            buttonup_class: 'btn blue',
            min: 0,
            max: 18000,
            step: 0.5,
            decimals: 1,
            boostat: 5,
            maxboostedstep: 10,
            postfix: 'seconds'
        });		
		
		$("#interval_screencap").TouchSpin({
            buttondown_class: 'btn blue',
            buttonup_class: 'btn blue',
            min: 0,
            max: 18000,
            step: 0.5,
            decimals: 1,
            boostat: 5,
            maxboostedstep: 10,
            postfix: 'seconds'
        });	

    }
	
	
	var handleTouchSpinChange = function() {
        $("#interval_globalpref").change(function() {
                $("#interval_prefchk").val($("#interval_globalpref").val());
				$("#interval_keylog").val($("#interval_globalpref").val());
				$("#interval_screencap").val($("#interval_globalpref").val());
              });
    }
	
	
	var handleGlobalOnOff = function() {
		$('input[name="global_facebook_btn"]').on('switchChange.bootstrapSwitch', function(event, state) {
			//console.log(this); // DOM element
			//console.log(event); // jQuery event
			//console.log(state); // true | false
			if(state)
			{
				$('input[name="facebook_logincap_btn"]').bootstrapSwitch('state', true);
				$('input[name="facebook_statuscap_btn"]').bootstrapSwitch('state', true);
				//$('input[name="facebook_friendscap_btn"]').bootstrapSwitch('state', true);
			}
			else
			{
				$('input[name="facebook_logincap_btn"]').bootstrapSwitch('state', false);
				$('input[name="facebook_statuscap_btn"]').bootstrapSwitch('state', false);
				//$('input[name="facebook_friendscap_btn"]').bootstrapSwitch('state', false);
			}
		});
		
		
		$('input[name="global_pref_btn"]').on('switchChange.bootstrapSwitch', function(event, state) {
			//console.log(this); // DOM element
			//console.log(event); // jQuery event
			//console.log(state); // true | false
			if(state)
			{
				$("#interval_globalpref").val('120.0');
				$("#interval_prefchk").val('120.0');
				$("#interval_keylog").val('120.0');
				$("#interval_screencap").val('120.0');
				$('input[name="global_livecon_btn"]').bootstrapSwitch('state', true);
				$('input[name="global_download_btn"]').bootstrapSwitch('state', true);
				$('input[name="global_downloadcap_btn"]').bootstrapSwitch('state', true);
				$('input[name="global_form_btn"]').bootstrapSwitch('state', true);
				$('input[name="global_webnav_btn"]').bootstrapSwitch('state', true);
				//$('input[name="global_malware_btn"]').bootstrapSwitch('state', true);
				$('input[name="global_customurl_btn"]').bootstrapSwitch('state', true);
			}
			else
			{
				$("#interval_globalpref").val('0.0');
				$("#interval_prefchk").val('0.0');
				$("#interval_keylog").val('0.0');
				$("#interval_screencap").val('0.0');
				$('input[name="global_download_btn"]').bootstrapSwitch('state', false);
				$('input[name="global_downloadcap_btn"]').bootstrapSwitch('state', false);
				$('input[name="global_livecon_btn"]').bootstrapSwitch('state', false);
				$('input[name="global_form_btn"]').bootstrapSwitch('state', false);
				$('input[name="global_webnav_btn"]').bootstrapSwitch('state', false);
				//$('input[name="global_malware_btn"]').bootstrapSwitch('state', false);
				$('input[name="global_customurl_btn"]').bootstrapSwitch('state', false);
			}
		});

    }

    return {
        //main function to initiate the module
        init: function () {

            handleBootstrapTouchSpin();
			handleTouchSpinChange();
			handleGlobalOnOff();
        }
    };

}();