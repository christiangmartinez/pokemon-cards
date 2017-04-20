var Pokemon = require('./../js/pokemon.js').pokemonModule;

var displayCards = function(cards) {
  cards.forEach(function(card) {
    $('.showCards').append('<div class="pokemonCard well">' +
              '<h1>' + card.name + '</h1>' +
              '<img src="' + card.imageUrl + '" alt="' + card.name + '" />' +
              '<p>HP: ' + card.hp + '; Rarity: ' + card.rarity + '</p>' +
              '</div>');
  });
};

$(document).ready(function() {
  var myPokemon = new Pokemon();
  $('#listAllCards').click(function() {
    myPokemon.getAllCards(displayCards);
  });
  // $('#artistSearch').click(function() {
  //   var artist = $('#artistName').val();
  //   newMusicObject.getArtistsByName(artist, displayArtists);
  // });
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
