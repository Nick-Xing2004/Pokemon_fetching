//fetching for the info the desired pokemon
//using the api provided by https://pokeapi.co/
function fetchPokemon() {
    const pokemonName = document.getElementById("PokemonName").value.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(response => {
        if (response.ok === false) {
            throw new Error("Could not fetch the pokemon resource!");
        }
        else {
            console.log(response);
            return response.json();    //返回一个json对象
        }
    }).then(data => {
        console.log(data);
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = pokemonSprite;
    }).catch(err => console.log(err));
}
