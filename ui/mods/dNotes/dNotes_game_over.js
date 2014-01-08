model.dNotes_armies = ko.observableArray([]);

handlers.server_state = function (msg) {
	var gameOverMsg;
	var gameOverText;
	var numWinners;

	if (msg.url && msg.url !== window.location.href)
		window.location.href = msg.url;
	else if (msg.data)
	{
		model.connected(true); 
		
		// Doe iets met msg.data.armies:
		// ai, defeated, disconnected, econ_rate, id, name, primary_color, secondary_color

		model.dNotes_armies.removeAll();
		for(var i = 0; i < msg.data.armies.length; i++)
		{
			var army = msg.data.armies[i];
			army.primary_color_rgb = 'rgb(' + Math.floor(army.primary_color[0]) + ',' + Math.floor(army.primary_color[1]) + ',' + Math.floor(army.primary_color[2]) + ')';
			army.secondary_color_rgb = 'rgb(' + Math.floor(army.secondary_color[0]) + ',' + Math.floor(army.secondary_color[1]) + ',' + Math.floor(army.secondary_color[2]) + ')';
			model.dNotes_armies.push(army);
		}

		gameOverMsg = msg.data.game_over;
		gameOverText = "";
		if (gameOverMsg && gameOverMsg.victor_name) {
			numWinners = gameOverMsg.victor_players.length;
			gameOverText = numWinners > 1 ? "WINNERS: " : "WINNER: ";
			if (numWinners)
				gameOverText += gameOverMsg.victor_players.join(", ");
			else //ai victory
				gameOverText += gameOverMsg.victor_name;
			
			model.playerIsWinner(_.contains(gameOverMsg.victor_players, model.displayName()));
			model.playGameOverMusic();
		}
		else {
			gameOverText = "DRAW";
		}
		model.game_over_msg(gameOverText);
	}
};

if(decode(localStorage['pa_stats_wants_to_send_']))
{	// This part is only for when cola_colin's PA stats mod is installed.
	$(".tbl_scoreboard").prepend(
		'<tr>' +
		'  <td colspan="15" data-bind="foreach: dNotes_armies">' +
		'    <span class="dNotes_color">' +
		'      <span class="dNotes_color_primary" data-bind="style: { backgroundColor: $data.primary_color_rgb}"></span>' +
		'      <span class="dNotes_color_secondary" data-bind="style: { backgroundColor: $data.secondary_color_rgb}"></span>' +
		'      <span class="dNotes_color_primary" data-bind="style: { backgroundColor: $data.primary_color_rgb}"></span>' +
		'    </span>' +
		'    <span class="dNotes_icon_note_no" data-bind="click: function () { dNotes_createNoteWindow($data.name, {\'rememberPosition\': false, \'offset\': \'center\', \'left\': 0, \'top\': 0, \'containment\': \'.div_body_cont\'}); }, dNotes_class: dNotes_hasNote($data.name), attr: {id: dNotes_generateId($data.name)}"></span>' +
		'    <span data-bind="text: $data.name" style="margin-right: 40px"></span>' +
		'  </td>' +
		'</tr><tr><td><span><br /></span></td></tr>');
}
else
{
	$(".tbl_scoreboard").replaceWith(
		'<table class="tbl_scoreboard"><tbody data-bind="foreach: dNotes_armies">' +
		'  <tr class="tr_datarow">' +
		'    <td>' +
		'      <span class="dNotes_color">' +
		'        <span class="dNotes_color_primary" data-bind="style: { backgroundColor: $data.primary_color_rgb}"></span>' +
		'        <span class="dNotes_color_secondary" data-bind="style: { backgroundColor: $data.secondary_color_rgb}"></span>' +
		'        <span class="dNotes_color_primary" data-bind="style: { backgroundColor: $data.primary_color_rgb}"></span>' +
		'      </span>' +
		'    </td>' +
		'    <td style="padding-right: 3px;">' +
		'      <div class="td_selected">' +
		'        <span class="dNotes_icon_note_no" data-bind="click: function () { dNotes_createNoteWindow($data.name, {\'rememberPosition\': false, \'offset\': \'center\', \'left\': 0, \'top\': 0, \'containment\': \'.div_body_cont\'}); }, dNotes_class: dNotes_hasNote($data.name), attr: {id: dNotes_generateId($data.name)}"></span>' +
		'      </div>' +
		'    </td>' +
		'    <td class="td_name" data-bind="text: $data.name">' +
		'    </td>' +
		'  </tr>' +
		'</tbody></table>'
	);
}
