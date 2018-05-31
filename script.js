$(function() {
	// alert("test");
	
	$(".panel-wrapper > div").not(':first').hide();

	// ①タブをクリックしたら発動
	$('#tab li').click(function() {
		// ②クリックされたタブの順番を変数に格納
		var index = $('#tab li').index(this);
		$(".panel-wrapper > div").hide();
		$(".panel-wrapper > div").eq(index).show();
	});

});

$(function() {
  $('#lhbtn').on('click', function() {
    $('#overlay, #modalWindow').fadeIn();
  });
  
  $('#close').on('click', function() {
    $('#overlay, #modalWindow').fadeOut();
  });
  
  locateCenter();
  $(window).resize(locateCenter);

  function locateCenter() {
    let w = $(window).width();
    let h = $(window).height();
    
    let cw = $('#modalWindow').outerWidth();
    let ch = $('#modalWindow').outerHeight();
   
    $('#modalWindow').css({
      'left': ((w - cw) / 2) + 'px',
      'top': ((h - ch) / 2) + 'px'
    });
  }
});

$(function() {
  $('#dhbtn').on('click', function() {
    $('#doverlay, #dmodalWindow').fadeIn();
  });
  
  $('#dclose').on('click', function() {
    $('#doverlay, #dmodalWindow').fadeOut();
  });
  
  locateCenter();
  $(window).resize(locateCenter);

  function locateCenter() {
    let w = $(window).width();
    let h = $(window).height();
    
    let cw = $('#dmodalWindow').outerWidth();
    let ch = $('#dmodalWindow').outerHeight();
   
    $('#dmodalWindow').css({
      'left': ((w - cw) / 2) + 'px',
      'top': ((h - ch) / 2) + 'px'
    });
  }
});



