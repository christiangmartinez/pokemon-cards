Pokemon = function(){
};

Pokemon.prototype.getAllCards = function (displayCards) {
  $.get('https://api.pokemontcg.io/v1/cards?pageSize=100')
  .then(function(response) {
    var cards = response.cards;
    displayCards(cards);
    console.log(cards);
  })
  .fail(function(error) {
    console.log("didn't work");
  });
};

exports.pokemonModule = Pokemon;
