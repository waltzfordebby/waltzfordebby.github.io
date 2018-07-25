$(document).ready(function(){

    //Smooth scrolling when click to navigation
    $('.navigation-content > ul > li > a').click(function (e){
   	 e.preventDefault();
   	 var curLink = $(this);
   	 var scrollPoint = $(curLink.attr('href')).position().top;
   	 $('body,html').animate({
   		  scrollTop: scrollPoint
   	 },1000);
    });

    //Footer Copyright
    var d = new Date(); 
    var y = d.getFullYear(); 
    $( ".copyright" ).html('&copy '+y+' Christian Lester B Cayabyab');

    //Change navigation menu active on click
    $('.navigation-content ul li a').click(function(){
       $('.navigation-content ul li a').removeClass('active');
       $(this).addClass('active');
    });

    //Change navigation menu active on scroll
    $(window).scroll(function(){
       onScrollHandle();
    });

    //Scroll Function
    function onScrollHandle(){

         //Get scroll position
         let currentScrollPos = $(document).scrollTop();

         //Iterate through all node
         $('.navigation-content ul li a').each(function(){
             let curLink = $(this);
             let linkRef = $(curLink.attr('href'));
             let linkRefPositionTop= linkRef.position().top;
             let linkRefHeight = linkRef.height();

             //Out this
             // console.log(curLink);
             // console.log(linkRef);
             // console.log(linkRefPositionTop);
             // console.log(linkRefHeight);

             //Compate the value of current position and the every section position in each scroll
             if(linkRefPositionTop <= currentScrollPos && linkRefPositionTop + linkRefHeight >= currentScrollPos){
                $('.navigation-content ul li a').removeClass('active');
                curLink.addClass('active');
             }else {
               curLink.removeClass('active');
             }
         });
    }

 });