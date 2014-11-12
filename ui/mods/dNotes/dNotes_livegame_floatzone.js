(function() {

	handlers.dNotes_newnote = function(payload) {
		dNotes.createNoteWindow(payload, {'rememberPosition': false, 'offset': 'center', 'left': 0, 'top': 160});

		var textarea = $('.dNotes_textarea');

		// Extra stuff to prevent key presses activating commands.
		textarea.focus(function() {api.Panel.message(api.Panel.parentId, 'dNotes_input', true);});
		textarea.blur(function() {api.Panel.message(api.Panel.parentId, 'dNotes_input', false);});
		
		// Escape should blur.
		textarea.keydown(function(e) {
			console.log('keypress: ',e);
			if(e.keyCode === keyboard.esc)
				textarea.blur();
		});
	};

})();
