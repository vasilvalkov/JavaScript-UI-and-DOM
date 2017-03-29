function solve() {
	return function (selector, rows, columns) {
		var $element = $(selector),
			$row;

		$table = $('<table />').addClass('spreadsheet-table');

		for (var i = 0; i <= rows; i += 1) {
			$row = $('<tr />');

			for (var j = 0; j <= columns; j += 1) {
				if (i === 0) {
					$th = $('<th />')
						.addClass('spreadsheet-item')
						.addClass('spreadsheet-header');
					if (j !== 0) {
							$th.html(String.fromCharCode(64 + j));
					} else {
					}

					$th.appendTo($row);
				} else {
					$td = $('<td />')
						.addClass('spreadsheet-item')
						.addClass('spreadsheet-cell');

					if (j === 0) {
						$th = $('<th />')
							.addClass('spreadsheet-item')
							.addClass('spreadsheet-header');
							$th.html(i);

						$th.appendTo($row);
					} else {
						$td = $('<td />')
							.addClass('spreadsheet-item')
							.addClass('spreadsheet-cell');
						$td.appendTo($row);
					}


				}

				$row.appendTo($table);
			}
		}
		$table.on('click', function () {

		});

		$table.appendTo($element);		
	};
}

// SUBMIT THE CODE ABOVE THIS LINE

if (typeof module !== 'undefined') {
	module.exports = solve;
}