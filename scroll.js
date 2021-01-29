$(document).ready(function() {
  //checking the page is ready and loaded.
  $("nav a").bind("click",function(event){ event.preventDefault(); var target = $(this).attr("href"); $("html, body").stop().animate({ scrollLeft: $(target).offset().left, scrollTop: $(target).offset().top }, 950); }); 
