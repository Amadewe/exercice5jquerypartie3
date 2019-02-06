$(function(){
  $('#target').keydown(function(event){
    // mettre mes var dans la fonction !!!!!!!!!
    // position initiale de mon carré en haut à gauche
    var positionX = $('.square').position().left;
    var positionY = $('.square').position().top;
    // retour à la taille de ma fenetre
    var widthWindow = $(window).width();
    var heightWindow = $(window).height();

    if (event.which == 37) {  // fleche gauche ok
      if (positionX < 0){
        $('.square').css('left', widthWindow);
      }else {
        // mon carré bouge à gauche de 10 px
        $('.square').animate({'left':'-=10px'});
      }
    }
    if (event.which == 39) {  // fleche droite
      if (positionX > widthWindow){
        $('.square').css('left', 0);
      }else {
        // mon carré bouge à droite de 10 px
        $('.square').animate({'left':'+=100px'});
      }
    }
    if (event.which == 38) {  // fleche haut
      if (positionY < 0){
        $('.square').css('top', heightWindow);
      }else {
        // mon carré bouge à gauche de 10 px
        $('.square').animate({'top':'-=10px'});
      }
    }
    if (event.which == 40) {  // fleche bas
      if (positionY > heightWindow){
        $('.square').css('top', 0 );
      }else {
        // mon carré bouge à gauche de 10 px
        $('.square').animate({'top':'+=100px'});
      }
    }

    console.log(positionX);
    console.log(positionY);
  });
});

//  ------------------ AVEC SWITCH -----------
// $(document).ready(function(){
//   $('#target').keydown(function(event){
//
//
// switch (event.which){
//   case 37: // fleche gauche
//     $('.carre').animate({'left':'-=10px'});
// break;
//   case 38: // fleche haut
//     $('.carre').animate({'top':'-=10px'});
// break;
// case 39: // fleche droite
//     $('.carre').animate({'left':'+=10px'});
// break;
// case 40: // fleche bas
//     $('.carre').animate({'top':'+=10px'});
// break;
// }
//   });
// });
