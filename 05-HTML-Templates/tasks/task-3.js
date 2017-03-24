function solve(){
	return function(){
		$.fn.listview = function(data){
			var template = $("#" + $(this).attr('data-template')).html();
			var hbTemplate = handlebars.compile(template);

			for (var i in data) {
				$(this).append(hbTemplate(data[i]));
			}

			return this;
		};
	};
}

module.exports = solve;