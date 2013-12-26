function dNotesViewModel(name, numeric_name)
{
	var self = this;

	self.name = ko.observable(name);
	self.htmlname = ko.computed(function() {
		return String(name).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
	});
	self.numeric_name = ko.observable(numeric_name);

	self.getNote = function()
	{
		if(!localStorage.dNotes_notes)
			return "";

		var notes = decode(localStorage.dNotes_notes);

		if(notes[name])
			return notes[name];
		else
			return "";
	};

	self.note = ko.observable(self.getNote());

	self.closeWindow = function()
	{
		document.getElementById('dNotes_' + numeric_name + '_frame').remove();
	}
/*
	self.hasNote = ko.computed( function()
	{
		console.log("dNotes: ", name);

		if(!localStorage.dNotes_notes)
			return false;

		var note = decode(localStorage.dNotes_notes);
		if(note[name])
			return true;
		else
			return false;
	});
*/
	self.saveNote = function()
	{
		var notes = {};
		if(localStorage.dNotes_notes)
			notes = decode(localStorage.dNotes_notes);

		notes[name] = self.note();

		localStorage.dNotes_notes = encode(notes);
		
		self.closeWindow();
	};
}

function dNotes_hasNote(name)
{
	if(!localStorage.dNotes_notes)
		return false;

	var notes = decode(localStorage.dNotes_notes);
	if(notes[name])
		return true;
	else
		return false;
}

function dNotes_createNoteWindow(name, options)
{
	// Convert name to ascii-numbers to prevent horrible stuff from happening with all of those fancy names out there. I hear some even have spaces! Gasp!
	var numeric_name = "";
	name = (String(name));
	for(var i = 0; i < name.length; i++)
		numeric_name += name.charCodeAt(i);

	createFloatingFrame('dNotes_' + numeric_name + '_frame', 270, 320, options);
	$('#dNotes_' + numeric_name + '_frame_content').append(
		'<div class="dNotes_window"><form>' +
		'    <div class="dNotes_window_header">' +
		'        <span data-bind="text: htmlname"></span>' +
		'        <a data-bind="click_sound: \'default\'">' +
		'            <img style="float:right;" src="../shared/img/close_btn.png" data-bind="click: closeWindow" />' +
		'        </a>' +
		'    </div>    ' +
		'    <div class="dNotes_window_cont">' +
		'        <textarea class="input_text input_chat_text dNotes_textarea" data-bind="value: note" />' +
		'    </div>' +
		'    <div class="" style="float:right;">' +
		'        <a data-bind="click_sound: \'default\', rollover_sound: \'default\'">' +
		'            <input type="button" value="SAVE AND CLOSE" id="Button1" class="btn_std btn_panel" data-bind="click: saveNote" />' +
		'        </a>' +
		'        <a data-bind="click_sound: \'default\', rollover_sound: \'default\'">' +
		'            <input type="button" value="CANCEL" id="Button2" class="btn_std btn_panel" data-bind="click: closeWindow" />' +
		'        </a>' +
		'    </div>' +
		'</div></form>'
	);
	var dModel = new dNotesViewModel(name, numeric_name);
	ko.applyBindings(dModel, document.getElementById('dNotes_' + numeric_name + '_frame'))
}