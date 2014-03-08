(function() {

var oldProcessGameBeacon = model.processGameBeacon;
model.processGameBeacon = function(beacon, host_id) {
	var game = oldProcessGameBeacon(beacon, host_id);
	game.player_names = beacon.player_names;
	
	return game;
};

model.testfunc = function(data) {
	console.log("test!");
}

var olddatabind = $('.one-game').attr('data-bind');
$('.one-game').attr('data-bind', olddatabind + ", click: function(data) { $parent.setSelected(data); $parent.testfunc(data); }");

$('.dPlayersInServerBrowser_player-name').replaceWith(
	'<span><span class="dNotes_icon_note_yes" data-bind="click: function () { dNotes.createNoteWindow($data, {\'rememberPosition\': false, \'offset\': \'center\', \'left\': 0, \'top\': 0}); return false; }, clickBubble: false, visible: dNotes.hasNote($data), attr: {id: dNotes.generateId($data)}"></span><span data-bind="text: $data, css: { dNotes_playername: dNotes.hasNote($data) }" style="margin-right: 1em"></span></span>'
);
$('.dPlayersInServerBrowser_player-name').css('white-space', 'nowrap');

})();
