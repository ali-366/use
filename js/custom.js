$(document).ready(function(){
    var typed = new Typed('.element',
     {
        strings: [
            'I a web digner', 
            'content creator',
            'web devloper'
        ],

        smartBackspace: true ,
        typeSpeed: 200,
        backSpeed: 0,
        loop: true,
      });
      


      var typed = new Typed('.element2',
     {
        strings: [
            'I a web digner', 
            'content creator',
            'web devloper'
        ],

        smartBackspace: true ,
        typeSpeed: 200,
        backSpeed: 0,
        loop: true,
      });
      var typed = new Typed('.element3',
     {
        strings: [
            'I a web digner', 
            'content creator',
            'web devloper'
        ],

        smartBackspace: true ,
        typeSpeed: 200,
        backSpeed: 0,
        loop: true,
      });

      


      $('.counter').counterUp({
        delay: 10,
        time: 3000
      });

      $('#rippleEffect').ripples({
          dropRadius:15,
      });    


      $( "#snow").fallingSnow({
        stopOnClick:false,
      });
    $('#countdown').countdown({
            year: 2022,// YYYY Format
            month: 1,// 1-12
            day: 1,// 1-31
            hour: 0,// 24 hour format 0-23
            minute: 0,// 0-59
            second: 0,// 0-59
        })
});

;
    