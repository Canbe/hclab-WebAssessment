$(function(){
  $(".btn_UserNav").click(function(event) {
    $(".userNav").slideToggle();

  });

  $(".sideNav .btnList>li").hover(function() {

    $(this).children("span").show(200);

  },function(){
    $(this).children("span").hide(200);
  });


})
