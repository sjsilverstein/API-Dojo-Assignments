// Stephen Silverstein
// https://github.com/sjsilverstein
$(document).ready(function(){
// BODY
	for(var i = 1; i <=151; i++){
		$('.images').append(`
		<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" alt="Pokemon No: ${i}" id="${i}" class="sprite">
		`);
		
	}

	$('.images img').click(function(){
		console.log($(this).attr("id"));
		$('.dexinfo').html(`<div class="loading"><img src="https://upload.wikimedia.org/wikipedia/en/3/39/Pokeball.PNG"></div>`);
		//Calls Loader
		$.get(`https://pokeapi.co/api/v2/pokemon/${$(this).attr("id")}/`, function(res){
		console.log(res);					
		 	$('.dexinfo').html(`<h1>Poke'Mon: ${res.id} - ${res.name}</h1>
		 		<img src="${res.sprites.front_default}" alt="${res.name}img class=sprite">
		 		<h2>Types:</h2>
		 		<ul class="type"></ul>
		 		<h2>Height:</h2>
		 		<p>${res.height}</p>
		 		<h2>Weight:</h2>
		 		<p>${res.weight}</p>
		 		`);
		 	for(var i = 0 ; i < res.types.length; i++){
		 		$('.type').append(`<li>${res.types[i].type.name}</li>`);
		 	}
		}, 'json');
	})

})