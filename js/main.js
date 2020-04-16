	var pokemonsElement = document.querySelector('.pokemons');

for(var i = 0; i < pokemons.length; i++){

	var pokemonElement = document.createElement('div');
	pokemonElement.classList.add('pokemon');

	var pokemonImgElement = document.createElement('img');
	pokemonImgElement.src = pokemons[i].img;
	pokemonImgElement.alt = pokemons[i].name;
	pokemonImgElement.classList.add('pokimon_img');

	var pokemonNameElement = document.createElement('h3');
	pokemonNameElement.textContent =pokemons[i].name;
	pokemonNameElement.classList.add('pokimon_name');

	var pokemonFavouriteElement = document.createElement('button');
	pokemonFavouriteElement.type = 'button';
	pokemonFavouriteElement.textContent ="+ favourite";
	pokemonFavouriteElement.classList.add('pokimon_name');

pokemonElement.appendChild(pokemonImgElement);
pokemonElement.appendChild(pokemonNameElement);
pokemonElement.appendChild(pokemonFavouriteElement);
pokemonsElement.appendChild(pokemonElement);
}

