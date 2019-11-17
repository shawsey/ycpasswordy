// Authentication.js

document.addEventListener('DOMContentLoaded', function() {
var gentwofac = document.getElementById('gen-twofac');
gentwofac.addEventListener('click', twofacgenerator);
console.log("EventListener");
});




function twofacgenerator() {

	var twofac = Math.floor(Math.random()*900000) + 100000;
	console.log(twofac);


	if ( twofac == 111111 || 222222 || 333333 || 444444 || 555555 || 6666666 || 777777 || 888888 || 999999 || 123456 ){
		var twofac = Math.floor(Math.random()*900000) + 100000;
	} 
	else

	console.log(twofac);

	return 0;
}