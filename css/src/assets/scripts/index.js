
/* ========================================================================
 * Engineer: Bryan Ricci
 * http://bryan-ricci.com
 * ========================================================================
 * Copyright 2012-2016 GoNoodle, Inc.
 * http://www.gonoodle.com
 * ======================================================================== */

// DEFINE SCOPE VARIABLE
// =====================

var $scope = {};

// BUTTON ADD VIDEO TO QUE
// ================

$scope.addVid = function() {
	
	// 	CONSOLE LOG ADD VIDEO
	// ===============

	console.log('Add video');
};

// BUTTON ADD VIDEO TO FAVORITES
// ======================

$scope.addFav = function(check, btn) {

	// IF NOT ADDED
	// ============

	if(check === true) {

		// CHANGE BTN CLICK EVENT
		// ==================

		btn.onclick = function() {
			$scope.addFav(false, btn);
		};

		// CHANGE BTN STYLE
		// ================
		
		btn.className = 'btn-top-rt-corner-active';
		btn.firstChild.src = 'assets/images/icon-heart.svg';
		btn.firstChild.alt = 'The Penguin Song is added to favorites';
		btn.lastChild.className = 'btn-top-rt-corner-outline-active';
		setTimeout(function() {
			btn.lastChild.className = 'btn-top-rt-corner-outline';
		}, 400);
	}

	// IF ADDED 
	// ========

	else {

		// CHANGE BTN CLICK EVENT
		// ==================

		btn.onclick = function() {
			$scope.addFav(true, btn);
		};

		// CHANGE BTN STYLE
		// ================

		btn.className = 'btn-top-rt-corner';
		btn.firstChild.src = 'assets/images/icon-heart-outline.svg';
		btn.firstChild.alt = 'The Penguin Song a favorite';
	}
};

// BUTTON MOUSE LEAVE EVENT
// ========================

$scope.btnBtmMouseOut = function(btn) {
	
	// BTN BLUR
	// ========

	btn.blur();
};

// BUTTON VIEW MORE
// ================

$scope.btnViewMore = function() {

	// 	CONSOLE LOG VIEW MORE
	// ===============

	console.log('View more');
};

// PLAY VIDEO
// ==========

$scope.playVid = function() {

	// 	CONSOLE LOG PLAY VIDEO
	// ================

	console.log('Play video');
};