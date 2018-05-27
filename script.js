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