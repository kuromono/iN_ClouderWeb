var Custom = function () {
	var setLoaderTimeout = function() {
        setTimeout(function(){
        $('body').addClass('loaded');
		}, 0);
    }
    return {
        init: function () {
            setLoaderTimeout();
        },
    };
}();