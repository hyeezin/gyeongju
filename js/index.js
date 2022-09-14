$(function(){

  //제이쿼리를 이용한 마우스호버 효과 구현
  $('.depth1').hover(function(){
    $(this).next('.depth2').stop().slideToggle(300);
    $('.gnb-bg').stop().slideToggle(150);
  })


  $('.festival-tab .tab-link').click(function(){
    $('.festival-tab .tab-link').removeClass('active');
    $('.festival-box-list .festival-tab-cont .festival-tab-cont-list').removeClass('active');
    $(this).addClass('active');
    $('#' + $(this).data('tab')).addClass('active');
  })  
});
$(function(){
  $('.seasons-tab .tab-link').click(function(){
    $('.seasons-tab .tab-link').removeClass('active');
    $('.seasons-box-list .seasons-tab-cont .seasons-tab-cont-list').removeClass('active');
    $(this).addClass('active');
    $('#' + $(this).data('tab')).addClass('active');
  })

});
