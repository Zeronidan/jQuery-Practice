function updateOutput(){
	$("iframe").contents().find("html").html(
		"<html><head><style type='text/css'>"
		+ $("#cssPanel").val() + "</style><head><body>" 
		+ $("#htmlPanel").val() + "</body></html>");

	document.getElementById("outputPanel").contentWindow.eval(
		$("#javascriptPanel").val());

};
updateOutput();

$(".toggleButton").hover(function(){
	$(this).addClass("highlightedButton"); //retain whatever styling it had b4
}, function(){
	$(this).removeClass("highlightedButton");
});

$(".toggleButton").click(function(){ //toggles selected buttons
	$(this).toggleClass("active");
	$(this).removeClass("highlightedButton");

	var panelId = $(this).attr("id") + "Panel";
	$("#" + panelId).toggleClass("hidden");

	var numActivePanels = 4 - $('.hidden').length;
	$(".panel").width(($(window).width()/numActivePanels)- 15);
});


$(".panel").height($(window).height()-$("#header").height() - 15);
$(".panel").width(($(window).width()/2)- 15);


$("textarea").on('change keyup paste', function() {
	updateOutput();
});
//$("iframe").contents().find("html").html($("#htmlPanel").val());



