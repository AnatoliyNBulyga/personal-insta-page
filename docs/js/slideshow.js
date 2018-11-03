$(document).ready(function(){

   var slideIndex = 0;

   function showPhotos() {

      var slides = $(".photo img");

      // Запускаем цикл для скрытия фото
      for ( var i = 0; i < slides.length; i++) {
         $(slides[i]).hide();

      }

      slideIndex++;

      // Сброс счетчика фото
      if ( slideIndex > slides.length ) {
         slideIndex = 1;
      }

      $(slides[slideIndex - 1]).fadeToggle(4000);



      setTimeout(showPhotos, 4000);

   }

   showPhotos();


});