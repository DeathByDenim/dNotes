(function() {

	$('.col-players').children().children('.item').replaceWith(
		'                                        <div class="item">' +
		'                                            <div>' +
		'                                              <!-- ko ifnot: $data === \'Open slot\' -->' +
		'                                              <span class="dNotes_icon_note_yes" data-bind="click: function () { dNotes.createNoteWindow($data, {\'rememberPosition\': false, \'offset\': \'center\', \'left\': 0, \'top\': 0}); return false; }, clickBubble: false, dNotes_class: dNotes.hasNote($data), attr: {id: dNotes.generateId($data)}"></span>' +
		'                                              <!-- /ko -->' +
		'                                              <span class="text" data-bind="text: $data, css: { open: $data === \'Open slot\' }"></span>' +
		'                                            </div>' +
		'                                        </div>'
	);

})();
