window.onload = function start (){
   setTimeout(function(){
       $("#hello").fadeOut(1000);
   }, 500); 
    setTimeout(function(){
       $("#hello").fadeIn(1000);
   }, 1000);
    setTimeout(function(){
       $("#hello").fadeOut(1000);
   }, 1500);
    setTimeout(function(){
       $("#hello").fadeIn(1000);
   }, 2000);
    
}
