(function() {

var oldProcessGameBeacon = model.processGameBeacon;
model.processGameBeacon = function(payload, host_id)
{
	for(var i = 0; i < payload.player_names.length; i++)
	{
		if(!dNotes.hasNote(payload.player_names[i]))
		{
			payload.player_names[i] = '<span><span class="dNotes_playername">' + payload.player_names[i] + '</span><a href="#" onclick="dNotes.createNoteWindow(\'' + (payload.player_names[i]) + '\', {\'rememberPosition\': false, \'offset\': \'center\', \'left\': 0, \'top\': 0, \'containment\': \'.div_body_cont\'}); return false;"><div class="dNotes_icon_note_yes"></div></a></span>';
		}
	}

	return oldProcessGameBeacon(payload, host_id);
};

})();
