(function() {

$('.dPlayersInServerBrowser_player-name').replaceWith(
	'<span><span class="dNotes_icon_note_yes" data-bind="click: function () { dNotes.createNoteWindow($data, {\'rememberPosition\': false, \'offset\': \'center\', \'left\': 0, \'top\': 0}); return false; }, clickBubble: false, visible: dNotes.hasNote($data), attr: {id: dNotes.generateId($data)}"></span><span data-bind="text: $data, css: { dNotes_playername: dNotes.hasNote($data) }" style="margin-right: 1em"></span></span>'
);
$('.dPlayersInServerBrowser_player-name').css('white-space', 'nowrap');

$('.col-players').children('div').prepend('<span class="dNotes_icon_note_yes" data-bind="click: function () { dNotes.createNoteWindow($data, {\'rememberPosition\': false, \'offset\': \'center\', \'left\': 0, \'top\': 0}); return false; }, clickBubble: false, visible: (dNotes.hasNote($data) && $data != \'Open slot\'), attr: {id: dNotes.generateId($data)}"></span>')

})();
