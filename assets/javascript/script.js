$(document).ready(function() {

	$("#link").click(function() {
		$("#modal-container").show();
	});

	$("#cancel").click(function() {
		$("#modal-container").hide();
	});

	$("#submit").click(function() {
		$("#modal-container").hide();
	});

	$("#modal-overlay").click(function() {
		$("#modal-container").hide();
	});

});