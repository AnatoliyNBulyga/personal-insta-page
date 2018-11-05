$(document).ready(function(){ 

	var userFeed = new Instafeed({
      get: 'user',
      userId: '7431119915',
      accessToken: '7431119915.1677ed0.3ea8842ef9c648b1bfd9516ccd655944',
      resolution: 'standard_resolution',
      limit: 60
  });
  userFeed.run();

  setTimeout(function(){
  	$('.instafeed').addClass('shadowed');
  }, 100);

});