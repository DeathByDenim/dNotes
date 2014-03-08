$('.slot-player-text:not(.host)').before(
	'<!-- ko ifnot: slot.isAI -->' +
	'<!-- ko ifnot: slot.isEmpty -->' +
	'<div class="dNotes_icon_note_no" style="margin-right: .2em" data-bind="click: function () { dNotes.createNoteWindow(slot.playerName(), {\'rememberPosition\': false, \'offset\': \'center\', \'left\': 0, \'top\': 0}); }, dNotes_class: dNotes.hasNote(slot.playerName()), attr: {id: dNotes.generateId(slot.playerName())}, clickBubble: false"></div>' +
	'<!-- /ko -->' +
	'<!-- /ko -->'
);
