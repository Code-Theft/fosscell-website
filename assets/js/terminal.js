// ------------------FAde In Animation -------------


  
  $(document).ready(function() {
      
      /* Every time the window is scrolled ... */
      $(window).scroll( function(){
      
          /* Check the location of each desired element */
          $('.hideme').each( function(i){
              
              var bottom_of_object = $(this).position().top + $(this).outerHeight();
              var bottom_of_window = $(window).scrollTop() + $(window).height();
              
              /* If the object is completely visible in the window, fade it it */
              if( bottom_of_window > bottom_of_object ){
                  
                  $(this).animate({'opacity':'1'},1200);
                      
              }
              
          }); 
      
      });
      
  });
// darkmode();

function darkmode()
{
    var testDiv = document.querySelector(".iconbox1");
    
    // demoDiv.innerHTML = "offsetLeft: " + testDiv.offsetLeft + "<br>offsetTop: " + testDiv.offsetTop;
    if(testDiv.offsetTop <= 10)
    {
        document.querySelector(".hambur").style.color = "red";
    }
    else{
        document.querySelector(".hambur").style.color = "green";
    }
}
