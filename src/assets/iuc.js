
jQuery(document).ready(function(){

    $(".newslider-minimal").sliderkit({
      auto:true,
      circular:true,
      shownavitems:1,
      panelfx:"sliding",
      panelfxspeed:400,
      panelfxeasing:"easeOutCirc",
      mousewheel:false,
      verticalnav:true,
      verticalslide:true
    });
    $(".lien").mouseenter(function(){
      /*$(this).stop().animate({left:'-10%'},500,'easeInCirc');*/
    })
      .mouseleave(function(){

      });
    /*$('.lien a,.fancybox').fancybox({
            padding		: 40,
            openEffect	: 'easeOutSine',
            openSpeed	: 150,
            closeEffect	: 'easeOutSine',
            closeSpeed	: 250,
            type		: 'ajax'
        });*/
    $('.fancybox').on('click', function(e){
      var href = $(this).attr('href');
      $.ajax({
        url: href,
        type: 'POST',
        beforeSend: function() {
          //console.log(dataString);
          $.fancybox($('#wait').html(),{padding		: 40});
        },
        success: function(data) {
          $.fancybox(data,{padding		: 40});
        }
      });
      return false;
    });
    $('form#flogin').on('submit', function(e) {
      e.preventDefault();
      //alert();
      $(this).validate();
      //var dataString = {
      //    'action' : 'shareDocument'
      //};
      var login = jQuery('#login_id').val();
      var phrase = jQuery('#phrase_id').val()
      var dataString = 'login='+login+'&phrase='+phrase;
      //jQuery.extend(true, dataString, form_data);
      //console.log(dataString);

      //$.fancybox.showActivity();

      $.ajax({
        url: 'login.php?srv=',
        type: 'POST',
        data: dataString,
        beforeSend: function() {
          $.fancybox($('#wait').html(),{padding		: 40});
        },
        success: function(data) {
          $.fancybox(data,{padding		: 40});
        }
      });
      return true;
    });
    //alert(window.innerWidth);
    /*$("#guide").css({
        opacity:1
    });*/
    $("#guide .actions a").click(function(){
      var act = $(this).attr('alt');
      if(act=='close'){
        $("#guide").hide();
      }
      if(act=='next'){
        var c = $('.next').attr('id');
        //alert(c);
        $("#guide").addClass(c);
        $('.current').addClass('prev').removeClass('current')
        $('#guide .msg div').next().addClass('next');
        $('#'+c).addClass('current').removeClass('next');
      }
      if(act=='prev'){
        var c = $('.prev').attr('id');
        //alert(c);
        $("#guide").addClass(c);
        $('.current').addClass('next').removeClass('current');
        $('#'+c).addClass('current').removeClass('prev');
        $('.next').removeClass('next');
        $('#guide .msg div').prev().addClass('prev');
      }
      return false;
    });
  });
