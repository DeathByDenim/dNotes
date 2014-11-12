var dNotes = (function() {

	var dNotes = {};

	dNotes.hasNote = function(name)
	{
		if(!localStorage.dNotes_notes)
			return false;

		var notes = decode(localStorage.dNotes_notes);
		if(notes[name])
			return true;
		else
			return false;
	}

	// Convert a name to a numeric code, so that special characters don't do
	// anything funny.
	function toNumericName(name)
	{
		var numeric_name = "";
		name = (String(name));
		for(var i = 0; i < name.length; i++)
			numeric_name += name.charCodeAt(i);

		return numeric_name;
	}

	// Generate an unique id for the icon, so we can update it later.
	dNotes.generateId = function(name)
	{
		return "dNotes_" + toNumericName(name) + "_icon";
	}

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
			$('#dNotes_' + numeric_name + '_frame').remove();
		}

		self.saveNote = function()
		{
			var notes = {};
			if(localStorage.dNotes_notes)
				notes = decode(localStorage.dNotes_notes);

			notes[name] = self.note();

			localStorage.dNotes_notes = encode(notes);

			var iconspan = $('#'+dNotes.generateId(self.name()));
			if(iconspan)
			{
				iconspan.removeClass("dNotes_icon_note_yes dNotes_icon_note_no");
				if(dNotes.hasNote(self.name()) == true)
				{
					iconspan.addClass("dNotes_icon_note_yes");
				}
				else
				{
					iconspan.addClass("dNotes_icon_note_no");
				}
			}

			self.closeWindow();
		};
	}

	// Create the actual floating frame containing the note.
	dNotes.createNoteWindow = function(name, options)
	{
		// Convert name to ascii-numbers to prevent horrible stuff from happening with all of those fancy names out there. I hear some even have spaces! Gasp!
		var numeric_name = toNumericName(name);
		
		if($('#dNotes_' + numeric_name + '_frame').length > 0)
		{
			$('#dNotes_' + numeric_name + '_frame').focus();
			return;
		}

		createFloatingFrame('dNotes_' + numeric_name + '_frame', 270, 320, options);
		$('#dNotes_' + numeric_name + '_frame_content').append(
			'<div class="dNotes_window"><form>' +
			'    <div class="dNotes_window_header">' +
			'        <span data-bind="text: htmlname"></span>' +
			'        <a data-bind="click_sound: \'default\'">' +
			'            <img style="float:right;" src="coui://ui/main/shared/img/close_btn.png" data-bind="click: closeWindow" />' +
			'        </a>' +
			'    </div>    ' +
			'    <div class="dNotes_window_cont">' +
			'        <textarea class="dNotes_textarea input_text input_chat_text" data-bind="value: note" />' +
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

	// Update the icon if a note has been made or removed.
	ko.bindingHandlers.dNotes_class =
	{
		update: function(element, valueAccessor, allBindings)
		{
			var value = valueAccessor();

			$(element).removeClass("dNotes_icon_note_yes dNotes_icon_note_no");
			if(value == true)
				$(element).addClass("dNotes_icon_note_yes");
			else
				$(element).addClass("dNotes_icon_note_no");
		}
	};

	return dNotes;

})();

