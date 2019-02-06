$(function(){
  //On stocke la largeur et la hauteur de la fenêtre dans des variables
  var windowWidth = $(window).width();
  console.log('Largeur de fenêtre : ' + windowWidth + '.');
  var windowHeight = $(window).height();
  console.log('Hauteur de fenêtre : ' + windowHeight + '.');

  //On stocke la largeur et la hauteur du carré dans des variables
  var squareWidth = $('#square').width();
  console.log('Hauteur du carré : ' + squareWidth + '.');
  var squareHeight = $('#square').height();
  console.log('Largeur du carré : ' + squareHeight + '.');
  //Je met un évènement"keydown" sur mon Input.
  //Je met "event" en paramètre de ma fonction anonyme, grâce à ça je vais pouvoir récupérer la touche sur laquelle j'ai appuyé.
  $('#direction').keydown(function(event){
    var squarePositionLeft = $('#square').offset().left;
    var squarePositionTop = $('#square').offset().top;
    //Switch est utilisé lorsque l'on veut comparer une variable à plusieurs valeurs
    switch (event.keyCode) {
      case 37:
        squarePositionLeft -= 10;
      break;
      case 38:
        squarePositionTop -= 10;
      break;
      case 39:
        squarePositionLeft += 10;
      break;
      case 40:
        squarePositionTop += 10;
      break;
    }
  //On définit la position du carré grâce à la fonction "Offset".
  $('#square').offset({top : squarePositionTop, left : squarePositionLeft});
  });
});
