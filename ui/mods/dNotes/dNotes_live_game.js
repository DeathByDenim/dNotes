(function() {

$('.div_primary_color').after('<span class="dNotes_icon_note_no receiveMouse" data-bind="click: function() { dNotes.createNoteWindow($data.name, {\'rememberPosition\': false, \'offset\': \'center\', \'left\': 0, \'top\': 0}); }, dNotes_class: dNotes.hasNote($data.name), attr: {id: dNotes.generateId($data.name)}, clickBubble: false"></span>');

$('.div_name_header').css('width', '189px');

})();
