// let input=document.querySelectorAll('.field__input');
// for(i=0;i<input.lenght; i++){
// 	let thisLink = input[i];
// 	input[i].addEventListener('click', function(){
// 		thisLink.classList.toggle('active');
// 	});
// }
$('.field__input-sub').click(function(event) {
	$('.field__input-sub, .field__sub, .field__item').toggleClass('active');
	});