(function() {

model.dNotes_playerswithnotes = ko.observableArray([]);
if(localStorage.dNotes_notes)
{
	var notes = decode(localStorage.dNotes_notes);
	for(var player in notes)
	{
		if(dNotes.hasNote(player))
			model.dNotes_playerswithnotes.push({TrueDisplayName: player});
	}
}

$('#social_tabs ul:first-child').append(
	'            <li class="game_settings">' +
	'                <a href="#tab_notes"><loc data-i18n="social:notes.message" desc="">NOTES</loc></a>' +
	'            </li>'
);
$('#social_tabs').append(
	'        <!--------- NOTES -------------------------->' +
	'        <div class="div_settings" id="tab_notes">' +
	'            <span><loc data-i18n="social:players_with_notes.message" desc="">Players with notes.</loc></span>' +
	'            <hr/>' +
	'            <div class="div_settings_graphics_cont">' +
	'                <div class="div_settings_graphics_detail_group">' +
	'                    <table>' +
	'                        <tbody data-bind="foreach: dNotes_playerswithnotes">' +
	'' +
	'                        <!-- ko if: $index() === model.selectedIndex() -->' +
	'                        <tr data-bind="click: function () { model.selectedIndex($index()) }" class="tr_selected">' +
	'                            <td>' +
	'                                <div class="td_selected">' +
	'                                    <span data-bind="text: $data.TrueDisplayName"></span>' +
	'                                        <!--<span data-bind="text: $data.id"></span>-->' +
	'                                        <!--<span data-bind="text: $data.lastGame"></span>-->' +
	'                                </div>' +
	'                            </td>' +
	'                            <td>' +
	'                            </td>' +
	'                        </tr>' +
	'                        <!-- /ko -->' +
	'                        <!-- ko ifnot: $index() === model.selectedIndex() -->' +
	'                        <tr data-bind="click: function () { model.selectedIndex($index()) }" class="tr_not_selected">' +
	'                            <td>' +
	'                                <div class="td_not_selected">' +
	'                                    <span data-bind="text: $data.TrueDisplayName"></span>' +
	'                                        <!--<span data-bind="text: $data.id"></span>-->' +
	'                                        <!--<span data-bind="text: $data.lastGame"></span>-->' +
	'                                </div>' +
	'                            </td>' +
	'                        </tr>' +
	'                        <!-- /ko -->' +
	'' +
	'                    </tbody>' +
	'                    </table>' +
	'                </div>' +
	'            </div>' +
	'        </div>'
);

$('.tr_not_selected,.tr_selected').each(function(index) {
	$(this).children(":first").children(":first").prepend(
		'                                        <span class="dNotes_icon_note_no" data-bind="click: function () { dNotes.createNoteWindow($data.TrueDisplayName, {\'rememberPosition\': false, \'offset\': \'center\', \'left\': 0, \'top\': 0, \'containment\': \'.div_body_cont\'}); return false; }, clickBubble: false, dNotes_class: dNotes.hasNote($data.TrueDisplayName), attr: {id: dNotes.generateId($data.TrueDisplayName)}"></span>'
	);
});

})();
