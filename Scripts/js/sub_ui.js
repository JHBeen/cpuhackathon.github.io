
$(document).ready(function(){

      //accordion - faq
      $(".sub_content").hide();
      $(".faq-list li a").on('click',function(e){
         e.preventDefault();
         var dad = $(this).parent('li'),
             subDiv = $('.sub_content');
         $(this).parent().siblings().find('a').removeClass('on');
         $(this).addClass('on');
         if (! dad.hasClass('on')){
            dad.addClass('on').siblings().removeClass('on');
            dad.siblings().find(subDiv).slideUp(300);
            dad.find(subDiv).slideDown(300);
            dad.find('span').addClass('arrow');
            dad.siblings().find('span').removeClass('arrow');
         } else {
            dad.removeClass('on').find(subDiv).slideUp(300);
            $(this).removeClass('on');
            dad.find('span').removeClass('arrow');
         }
      });
	  //accordion - life
      $(".sub_content").hide();
      $(".life-list li a").on('click',function(e){
         e.preventDefault();
         var dad = $(this).parent('li'),
             subDiv = $('.sub_content');
         $(this).parent().siblings().find('a').removeClass('on');
         $(this).addClass('on');
         if (! dad.hasClass('on')){
            dad.addClass('on').siblings().removeClass('on');
            dad.siblings().find(subDiv).slideUp(300);
            dad.find(subDiv).slideDown(300);
            dad.find('span').addClass('arrow');
            dad.siblings().find('span').removeClass('arrow');
         } else {
            dad.removeClass('on').find(subDiv).slideUp(300);
            $(this).removeClass('on');
            dad.find('span').removeClass('arrow');
         }
      });
			
      //tab - join
      //$(".join-menu li a:first").addClass('active');
      //$(".join-cont").hide();
      //$(".join-cont:first").show();
      //$(".join-menu > li a").on('click', function(){
      //   $(".join-menu > li a").removeClass('active');
      //   $(this).addClass('active');
      //   $(".join-cont").hide();
      //   var act_cont = $(this).attr("href");
      //   $(act_cont).show();
      //   return false;
      //});

       // mobile header close button
      $(".m-close a").on('click', function(){
         $(".gnb-m").hide();
      });
     var winWidth = $(window).width();
       if (winWidth >= 1260-17){
               $(".gnb").css('display','block');
               $(".gnb-m").css('display','none');
               $(".gnb ul li").hover(function(){
                    $(this).find('.sub-menu').css('display','block');
                    if($(this).find('.sub-menu').css('display','block')){
                      $(this).css('background', '#000');
                    }else{
                      $(this).css('background', 'transparent');
                    }
               }, function(){
                     $(this).find('.sub-menu').css('display','none');
                     $(this).css('background', 'transparent');
               });
          } else {
             $(".gnb").css('display','none');
             $(".gnb_m").click(function(){
                      $(".gnb-m").css('display','block');
             });
          }
      $(window).resize(function(){
           var winWidth = $(window).width();
            if (winWidth >= 1260-17){
                 $('.sub-menu').hide();
                 $(".gnb").css('display','block');
                 $(".gnb-m").css('display','none');
                 $(".gnb ul li").hover(function(){
                      $(this).find('.sub-menu').css('display','block');
                      if($(this).find('.sub-menu').css('display','block')){
                      $(this).css('background', '#000');
                    }else{
                      $(this).css('background', 'transparent');
                    }
                 }, function(){
                       $(this).find('.sub-menu').css('display','none');
                       $(this).css('background', 'transparent');
                 });
            } else {
               $(".gnb").css('display','none');
               $(".gnb_m").click(function(){
                  $(".gnb-m").css('display','block');
            $(".gnb-m ul li > .sub-menu").css('display','block');

               });
            }
      });		
	//mobile menu fade
       $(".gnb li a, .gnb-m li a").on('click',function(e){
		e.preventDefault();
		var link = $(this).attr("href");		
		var link_arr = link.split("#"); 
		introUrl = link_arr[1];		
		$(".gnb-m").hide();
        location.href = link;
	 });
	function loadOn(){
		$('.loading2').fadeIn('slow');
	}
	function loadOff(){
		$('.loading2').fadeOut('slow');
	}
});