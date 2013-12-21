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

function dNotes_save_note(playername, note)
{
	var notes = [];
	if(localStorage.dNotes_notes)
		notes = decode(localStorage.dNotes_notes);

	notes[playername] = note;

	localStorage.dNotes_notes = encode(notes);
}

function dNotes_create_note_window(name, options)
{
	createFloatingFrame('dNotes_' + name + '_frame', 270, 320, options);
	$('#dNotes_' + name + '_frame_content').append(
		'<div class="dNotes_window" data-bind="visible: showPatchNotes">' +
		'    <div class="dNotes_window_header">' +
		'        ' + name + ' ' +
		'        <a data-bind="click_sound: \'default\'">' +
		'            <img style="float:right;" src="../shared/img/close_btn.png" data-bind="click: function () { model.hidePatchNotes(!model.hidePatchNotes()) }" />' +
		'        </a>' +
		'    </div>    ' +
		'    <div class="dNotes_window_cont">' +
		'        <textarea class="input_text input_chat_text dNotes_textarea" />' +
		'    </div>' +
		'    <div class="" style="float:right;">' +
		'        <a data-bind="click_sound: \'default\', rollover_sound: \'default\'">' +
		'            <input type="button" value="SAVE AND CLOSE" id="Button1" class="btn_std btn_panel" data-bind="click: dNotes_save_note" />' +
		'        </a>' +
		'        <a data-bind="click_sound: \'default\', rollover_sound: \'default\'">' +
		'            <input type="button" value="CANCEL" id="Button2" class="btn_std btn_panel" data-bind="click: dNotes_save_note" />' +
		'        </a>' +
		'    </div>' +
		'</div>'
	);
}
