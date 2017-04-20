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

Pokemon.prototype.getCardsByType = function (type, displayCards) {
  $.get('https://api.pokemontcg.io/v1/cards?types=' + type)
  .then(function(response) {
    var cards = response.cards;
    displayCards(cards);
    console.log(cards);
  })
  .fail(function(error) {
    console.log("didn't work");
  });
};

Pokemon.prototype.getTypes = function(buildTypesDropdown) {
  $.get('https://api.pokemontcg.io/v1/types')
  .then(function(response) {
    var types = response.types;
    console.log(types);
    buildTypesDropdown(types);
  })
  .fail(function(error) {
    console.log("didn't work");
  });
};

exports.pokemonModule = Pokemon;
