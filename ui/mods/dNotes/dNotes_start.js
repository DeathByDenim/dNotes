(function() {

	$('.nav-pills').append(
		'                        <li>\n' +
		'                                                <a href="#notes" data-toggle="pill" data-bind="click_sound: \'default\', rollover_sound: \'default\'">Notes\n' +
		'                            </a>\n' +
		'                        </li>\n'
	);

	$('.tab-content').append(
		'                    <div class="tab-pane" id="notes" data-bind="foreach: dNotes_notes" style="line-height:1.5;">\n' +
		'                      <div style="margin-top: .75em; margin-left:1em">\n' +
		'                        <span class="dNotes_icon_note_no" data-bind="click: function () { dNotes.createNoteWindow($data.TrueDisplayName, {\'rememberPosition\': false, \'offset\': \'center\', \'left\': 0, \'top\': 0}); return false; }, clickBubble: false, dNotes_class: dNotes.hasNote($data.TrueDisplayName), attr: {id: dNotes.generateId($data.TrueDisplayName)}"></span>\n' +
		'                        <span data-bind="text: $data.TrueDisplayName"></span>\n' +
		'                      </div>\n' +
		'                    </div>\n'
	);

	var width = parseInt($('#section_videos').css('width'));
	width += 50;
	$('#section_videos').css('width', width+'px');

	width = parseInt($('.community_content').css('width'));
	width += 50;
	$('.community_content').css('width', width+'px');

	model.dNotes_notes = ko.observableArray([]);
	if(localStorage.dNotes_notes)
	{
		var notes = decode(localStorage.dNotes_notes);
		for(var player in notes)
		{
			if(dNotes.hasNote(player))
				model.dNotes_notes.push({TrueDisplayName: player});
		}
	}

})();
