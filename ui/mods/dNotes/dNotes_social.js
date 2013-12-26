$('.tr_selected').append(
	'                                <td>' +
	'                                    <span><input type="button" value="NOTE" class="btn_friend" ' +
	'                                                 data-bind="click: function () { dNotes_createNoteWindow($data.name, {\'rememberPosition\': false, \'offset\': \'center\', \'left\': 0, \'top\': 0, \'containment\': \'.div_body_cont\'}); },' +
	'                                                            click_sound: \'default\', rollover_sound: \'default\'" /></span>' +
	'                                </td>'
);
