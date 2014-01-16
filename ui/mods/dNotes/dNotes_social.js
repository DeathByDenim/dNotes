(function() {

model.dNotes_playerswithnotes = ko.observableArray([]);
if(localStorage.dNotes_notes)
{
	var notes = decode(localStorage.dNotes_notes);
	for(var player in notes)
	{
		if(dNotes.hasNote(player))
			model.dNotes_playerswithnotes.push({name: player});
	}
}

$('#social_tabs ul:first-child').append(
	'            <li class="game_settings">' +
	'                <a href="#tab_notes">NOTES</a>' +
	'            </li>'
);
$('#social_tabs').append(
	'        <!--------- NOTES -------------------------->' +
	'        <div class="div_settings" id="tab_notes">' +
	'            <span>Players with notes.</span>' +
	'            <hr/>' +
	'            <div class="div_settings_graphics_cont">          ' +
	'                <table>' +
	'                    <tbody data-bind="foreach: dNotes_playerswithnotes" style="height: 400px">' +
	'                            <!-- ko if: $index() === model.selectedIndex() -->' +
	'                            <tr data-bind="click: function () { model.selectedIndex($index()) }" class="tr_selected">' +
	'                                <td>                         ' +
	'                                    <div class="td_selected">' +
	'                                        <span data-bind="text: $data.name"></span>' +
	'                                    </div>' +                                                                              
	'                                </td>' +
	'                            </tr>' +
	'                            <!-- /ko -->' +
	'                            <!-- ko ifnot: $index() === model.selectedIndex() -->' +
	'                            <tr data-bind="click: function () { model.selectedIndex($index()) }" class="tr_not_selected">' +
	'                                <td>                         ' +
	'                                    <div class="td_not_selected">' +
	'                                        <span data-bind="text: $data.name"></span>' +
	'                                    </div>' +
	'                                </td>' +
	'                            </tr>' +
	'                            <!-- /ko -->' +
	'                    </tbody>' +
	'                </table>' +
	'            </div>' +
	'        </div>'
);
$('.tr_not_selected').prepend(
	'                                <td style="padding-right: 3px;">                         ' +
	'                                    <div class="td_selected">' +
	'                                        <span class="dNotes_icon_note_no" data-bind="click: function () { dNotes.createNoteWindow($data.name, {\'rememberPosition\': false, \'offset\': \'center\', \'left\': 0, \'top\': 0, \'containment\': \'.div_body_cont\'}); }, dNotes_class: dNotes.hasNote($data.name), attr: {id: dNotes.generateId($data.name)}"></span>' +
	'                                    </div>                                                                              ' +
	'                                </td>'
);
$('.tr_selected').prepend(
	'                                <td style="padding-right: 3px;">                         ' +
	'                                    <div class="td_selected">' +
	'                                        <span class="dNotes_icon_note_no" data-bind="click: function () { dNotes.createNoteWindow($data.name, {\'rememberPosition\': false, \'offset\': \'center\', \'left\': 0, \'top\': 0, \'containment\': \'.div_body_cont\'}); }, dNotes_class: dNotes.hasNote($data.name), attr: {id: dNotes.generateId($data.name)}"></span>' +
	'                                    </div>                                                                              ' +
	'                                </td>'
);

})();
