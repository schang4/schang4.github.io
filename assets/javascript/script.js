$(document).ready(function() {

	$("#gallery").click(function() {
		$("#modal-container").show();
	});

	$("#modal-overlay").click(function() {
		$("#modal-container").hide();
	});

	$("#europe-image").hover(function() {
		$("#europe").hide();
	});

	$("#peru-image").hover(function() {
		$("#peru").hide();
	});

	$("#thailand-image").hover(function() {
		$("#thailand").hide();
	});

	$("#europe-container").hover(function() {
		$("#europe").show();
	});

	$("#peru-container").hover(function() {
		$("#peru").show();
	});

	$("#thailand-container").hover(function() {
		$("#thailand").show();
	});

	$('.grid').masonry({
	  // options...
	  itemSelector: '.grid-item',
	  columnWidth: 200
	});
});

// When you leave the hover, I want the name "europe" to show up again. And make the page not recenter because of hiding "europe"