$('.tr_not_selected').prepend(
	'                                <td style="padding-right: 3px;">                         ' +
	'                                    <div class="td_selected">' +
	'                                        <span class="dNotes_icon_note_no" data-bind="click: function () { dNotes_createNoteWindow($data.name, {\'rememberPosition\': false, \'offset\': \'center\', \'left\': 0, \'top\': 0, \'containment\': \'.div_body_cont\'}); }, dNotes_class: dNotes_hasNote($data.name), attr: {id: dNotes_generateId($data.name)}"></span>' +
	'                                    </div>                                                                              ' +
	'                                </td>'
);
$('.tr_selected').prepend(
	'                                <td style="padding-right: 3px;">                         ' +
	'                                    <div class="td_selected">' +
	'                                        <span class="dNotes_icon_note_no" data-bind="click: function () { dNotes_createNoteWindow($data.name, {\'rememberPosition\': false, \'offset\': \'center\', \'left\': 0, \'top\': 0, \'containment\': \'.div_body_cont\'}); }, dNotes_class: dNotes_hasNote($data.name), attr: {id: dNotes_generateId($data.name)}"></span>' +
	'                                    </div>                                                                              ' +
	'                                </td>'
);
