(function() {

	$('.div_player_name').before('<div class="dNotes_icon_note_no receiveMouse" style="margin-right: 4px;" data-bind="click: function() { api.Panel.message(api.Panel.parentId, \'dNotes_message\', {name: $data.name}); }, dNotes_class: dNotes.hasNote($data.name), attr: {id: dNotes.generateId($data.name)}, clickBubble: false, visible: !ai"></div>');

})();
