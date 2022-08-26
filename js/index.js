$(function(){
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

  $(function(){
    let num = 1;
    $('.material-symbols-outlined').on('click' , function(){
      if( num == 1) {
        $('.allmenu-wrap').show()
        num = 2;
      } else if( num == 2) {
        $('.allmenu-wrap').hide()
        num = 1;
      }
    })
  })
});
