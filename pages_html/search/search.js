function include(url) {
	var script = document.createElement('script');
	script.src = url;
	document.getElementsByTagName('head')[0].appendChild(script);
}
$(document).ready(function(){
include("../../source/components/header/header.js");
include("../../source/components/check-list/check-list.js");
include("../../source/components/price-range/price-range.js");
include("../../source/components/rating-stars/rating-stars.js");
});




