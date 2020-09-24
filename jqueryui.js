$(function() {

		$("#draggable2").draggable();
		$("#droppable").droppable({
			drop: function(event, ui){
				alert("Dropped!");
			}

		});
		$("#draggable").draggable({axis: "x"});

		$("span").draggable({containment: "parent"});

		$("#resizable").resizable({grid:50,alsoResize: "#also",
	 		resize: function( event, ui ) {
	 			if($("#resizable").width() > 300){//callback function - called when resized
	 				alert("Big enough!");
	 			}
			}
		});

		$("#also").resizable({grid:50,alsoResize: "#also"});
});



