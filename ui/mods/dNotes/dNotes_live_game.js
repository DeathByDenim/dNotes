(function() {

	// Comes from players panel and creates a new not in the floatzone panel.
	handlers.dNotes_message = function(payload) {
		api.panels.LiveGame_FloatZone.message("dNotes_newnote", payload.name);
	}

	// Comes from the floatzone panel and surpresses keypresses being passed
	// to the game when the textarea for typing is active.
	handlers.dNotes_input = function(surpress) {
		api.game.captureKeyboard(surpress);
		inputmap.paused(surpress);
	}

})();
