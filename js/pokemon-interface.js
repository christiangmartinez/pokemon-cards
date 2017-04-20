var Pokemon = require('./../js/pokemon.js').pokemonModule;
var myPokemon = new Pokemon();

var buildTypesDropdown = function(types) {
  $('#type').empty();
  types.forEach(function(type) {
    $('#type').append('<option value="' + type + '">' + type + '</option>');
  });
}

var buildSetsDropdown = function(sets) {
  $('#set').empty();
  sets.forEach(function(set) {
    $('#set').append('<option value="' + set.code + '">' + set.name + '</option>');
  });
}

var displayCards = function(cards) {
    $('.showCards').empty();
  cards.forEach(function(card) {
    $('.showCards').append('<div class="pokemonCard well col-md-4">' +
                '<h1>' + card.name + '</h1>' +
                '<img src="' + card.imageUrl + '" alt="' + card.name + '" />' +
                '<p>HP: ' + card.hp + '; Rarity: ' + card.rarity + '</p>' +
              '</div>');
  });
};

$(document).ready(function() {
  myPokemon.getSets(buildSetsDropdown);
  myPokemon.getTypes(buildTypesDropdown);
  $('#listAllCards').click(function() {
    myPokemon.getAllCards(displayCards);
  });
  $('#listCardsByType').submit(function(event) {
    event.preventDefault();
    var type = $("#type").val();
    console.log(type);
    myPokemon.getCardsByType(type, displayCards);
  });
  $('#listCardsBySet').submit(function(event) {
    event.preventDefault();
    var set = $('#set').val();
    console.log(set);
    myPokemon.getCardsBySet(set, displayCards);
  })
});
//
// var clearResults = function() {
//   $('.showArtists').empty();
//   $('.showAlbums').empty();
//   $('#albumQueryMessage').empty();
//   $('.showTracks').empty();
// }
//
// $(document).on("click", ".tracksByAlbum", function() {
//   var albumId = $(this).attr('id');
//   var currentMusicObject = new Music();
//   currentMusicObject.getTracks(albumId, displayTracks);
// });
//
// $(document).on("click", ".trackDetails", function() {
//   $("#showTrackDetails").remove();
//   $(this).after('<span id="showTrackDetails"></span>');
//   var trackId = $(this).attr('id');
//   var currentMusicObject = new Music();
//   currentMusicObject.getTrackDetails(trackId, trackDetails);
// });
//
// $(document).on("click", ".albumsByArtist", function() {
//   var artistId = $(this).attr('id');
//   var artistName = $(this).attr('value');
//   $('#albumQueryMessage').text("Here are " + artistName + "'s albums.");
//   var currentMusicObject = new Music();
//   currentMusicObject.getAlbumsByArtist(artistId, displayAlbums);
// });
