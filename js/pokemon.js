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

Pokemon.prototype.getSets = function (buildSetsDropdown) {
  $.get('https://api.pokemontcg.io/v1/sets')
  .then(function(response) {
    var sets = response.sets;
    console.log(response.sets);
    buildSetsDropdown(sets)
  })
  .fail(function(error) {
    console.log("FAILURE");
  });
};

Pokemon.prototype.getCardsBySet = function (set, displayCards) {
  $.get('https://api.pokemontcg.io/v1/cards?setCode=' + set)
  .then(function(response) {
    var cards = response.cards;
    displayCards(cards);
  })
  .fail(function(error) {
    console.log("FAILURE");
  });
};

exports.pokemonModule = Pokemon;
