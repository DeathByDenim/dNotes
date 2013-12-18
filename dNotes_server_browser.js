console.log("dNotes_server_browser.js", "Start");
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
		if(dNotes_has_note(payload.player_names[i]))
		{
			payload.player_names[i] = '<span class="dNotes_playername">' + payload.player_names[i] + '<img src="../../mods/dNotes/img/dNotes_icon_note.png" class="dNotes_icon" onmouseover="console.log(\'dNotes_server_browser\', \'click!\');" /></span>';
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

console.log("dNotes_server_browser.js", "End");
