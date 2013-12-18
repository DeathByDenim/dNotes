function dNotes_has_note(playername)
{
	if(!localStorage.dNotes_notes)
		return false;

	var note = decode(localStorage.dNotes_notes);
	if(note[playername])
		return true;
	else
		return false;
}

function dNotes_get_note(playername)
{
	if(!localStorage.dNotes_notes)
		return "";

	var notes = decode(localStorage.dNotes_notes);

	if(notes[playername])
		return notes[playername];
	else
		return "";
}

function dNotes_create_note(playername, note)
{
	var notes = [];
	if(localStorage.dNotes_notes)
		notes = decode(localStorage.dNotes_notes);

	notes[playername] = note;

	localStorage.dNotes_notes = encode(notes);
}
