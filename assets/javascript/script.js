$(document).ready(function() {

	$("#gallery").click(function() {
		$("#modal-container").show();
	});

	$("#modal-overlay").click(function() {
		$("#modal-container").hide();
	});

	$("#cambodia-image").hover(function() {
		$("#cambodia").hide();
	});

	$("#boston-image").hover(function() {
		$("#boston").hide();
	});

	$("#thailand-image").hover(function() {
		$("#thailand").hide();
	});

	$("#cambodia-container").hover(function() {
		$("#cambodia").show();
	});

	$("#boston-container").hover(function() {
		$("#boston").show();
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