console.log("dNotes_server_browser.js", "Start");

function playernameClicked(source)
{
	dNotes_create_note_window(source, {'rememberPosition': false, 'offset': 'center', 'left': 0, 'top': 0, "containment": ".div_body_cont"});
}

model.processGameBeacon = function(payload, host_id)
{
	var players;
	if (payload.hasOwnProperty('max_players')) {
		players = payload.players.toString() + '/' + payload.max_players.toString();
		if (payload.max_spectators)
			players = players + ' (+' + payload.spectators.toString() + '/' + payload.max_spectators.toString() + ')';
	}
	else
		players = '0/0';

	for(var i = 0; i < payload.player_names.length; i++)
	{
		if(!dNotes_has_note(payload.player_names[i]))
		{
			payload.player_names[i] = '<span class=""><span class="dNotes_box_left"></span><span class="dNotes_playername">' + payload.player_names[i] + '</span><a href="#" onclick="playernameClicked(\'' + payload.player_names[i] + '\'); return false;"><img src="../../mods/dNotes/img/dNotes_icon_note.png" class="dNotes_icon" /></a></span>';
		}
	}

	var game = [
		payload.region || 'LOCAL',
		(payload.player_names || []).join(' ') || 'Empty Game',
		payload.host || 'UberNet',
		payload.mode,
		players,
		payload.require_password ? '<div class="div_lock_icon"></div>' : '',
		host_id,
		payload.port ? payload.port : ''        
		];

	return game;
};

$(document).ready(function () {
});

console.log("dNotes_server_browser.js", "End");
