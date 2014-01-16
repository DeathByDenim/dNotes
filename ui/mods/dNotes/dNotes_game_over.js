(function () {

model.dNotes_armies = ko.observableArray([]);

var dNotes_old_server_state = handlers.server_state;
handlers.server_state = function (msg)
{
	if(!(msg.url && msg.url !== window.location.href) && msg.data)
	{
		model.dNotes_armies.removeAll();
		for(var i = 0; i < msg.data.armies.length; i++)
		{
			var army = msg.data.armies[i];
			army.primary_color_rgb = 'rgb(' + Math.floor(army.primary_color[0]) + ',' + Math.floor(army.primary_color[1]) + ',' + Math.floor(army.primary_color[2]) + ')';
			army.secondary_color_rgb = 'rgb(' + Math.floor(army.secondary_color[0]) + ',' + Math.floor(army.secondary_color[1]) + ',' + Math.floor(army.secondary_color[2]) + ')';
			model.dNotes_armies.push(army);
		}
	}

	dNotes_old_server_state(msg);
};

if(decode(localStorage['pa_stats_wants_to_send_']))
{	// This part is only for when cola_colin's PA stats mod is installed.
	$(".tbl_scoreboard").prepend(
		'<tr>' +
		'  <td>PLAYERS:</td>' +
		'  <td colspan="14" style="text-align: left" data-bind="foreach: dNotes_armies">' +
		'    <span class="dNotes_item">' +
		'      <span class="dNotes_color">' +
		'        <span class="dNotes_color_primary" data-bind="style: { backgroundColor: $data.primary_color_rgb}"></span>' +
		'        <span class="dNotes_color_secondary" data-bind="style: { backgroundColor: $data.secondary_color_rgb}"></span>' +
		'        <span class="dNotes_color_primary" data-bind="style: { backgroundColor: $data.primary_color_rgb}"></span>' +
		'      </span>' +
		'      <span class="dNotes_icon_note_no" data-bind="click: function () { dNotes.createNoteWindow($data.name, {\'rememberPosition\': false, \'offset\': \'center\', \'left\': 0, \'top\': 0, \'containment\': \'.div_body_cont\'}); }, dNotes_class: dNotes.hasNote($data.name), attr: {id: dNotes.generateId($data.name)}"></span>' +
		'      <span data-bind="text: $data.name, style: { marginRight: $data.ai ? \'0px\' : \'40px\' }"></span>' +
		'      <span data-bind="visible: $data.ai" style="margin-right: 40px"> AI</span>' +
		'    </span>' +
		'  </td>' +
		'</tr><tr><td><span><br /></span></td></tr>');
}
else
{
	$(".tbl_scoreboard").replaceWith(
		'<table class="tbl_scoreboard"><tbody data-bind="foreach: dNotes_armies">' +
		'  <tr class="tr_datarow">' +
		'    <td>' +
		'      <span class="dNotes_color">' +
		'        <span class="dNotes_color_primary" data-bind="style: { backgroundColor: $data.primary_color_rgb}"></span>' +
		'        <span class="dNotes_color_secondary" data-bind="style: { backgroundColor: $data.secondary_color_rgb}"></span>' +
		'        <span class="dNotes_color_primary" data-bind="style: { backgroundColor: $data.primary_color_rgb}"></span>' +
		'      </span>' +
		'    </td>' +
		'    <td style="padding-right: 3px;">' +
		'      <div class="td_selected">' +
		'        <span class="dNotes_icon_note_no" data-bind="click: function () { dNotes.createNoteWindow($data.name, {\'rememberPosition\': false, \'offset\': \'center\', \'left\': 0, \'top\': 0, \'containment\': \'.div_body_cont\'}); }, dNotes_class: dNotes.hasNote($data.name), attr: {id: dNotes.generateId($data.name)}"></span>' +
		'      </div>' +
		'    </td>' +
		'    <td class="td_name">' +
		'      <span data-bind="text: $data.name"></span>' +
		'      <span data-bind="visible: $data.ai"> AI</span>' +
		'    </td>' +
		'  </tr>' +
		'</tbody></table>'
	);
}

})();
