// Stephen Silverstein
// https://github.com/sjsilverstein
$(document).ready(function(){
// BODY
	for(var i = 1; i <=151; i++){
	$('.images').append(`
		<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" alt="Pokemon No: ${i}" id="${i}" class="sprite">
		`);
	}

	// $('.images img').click(function(){
	// 	console.log($(this).attr("id"));
	// 	$('.dexinfo').html(`
	// 		<h1>Name</h1>
	// 		`);
	// })

})