var interval = setInterval(function(){
    var countForVideo = document.getElementById('video').readyState;
    if(countForVideo == 4){
      document.getElementById('video').play();
      clearInterval(interval);
    }
  },2000);