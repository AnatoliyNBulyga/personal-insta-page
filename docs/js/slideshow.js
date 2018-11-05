$(document).ready(function(){

   var slideIndex = 0;

   function showPhotos() {

      var slides = $("#instafeed a");

      // Запускаем цикл для скрытия фото
      for ( var i = 0; i < slides.length; i++) {
         $(slides[i]).hide();

      }

      slideIndex++;

      // Сброс счетчика фото
      if ( slideIndex > slides.length ) {
         slideIndex = 1;
      }

      $(slides[slideIndex - 1]).fadeToggle(300);



      setTimeout(showPhotos, 300);

   }

   showPhotos();


});