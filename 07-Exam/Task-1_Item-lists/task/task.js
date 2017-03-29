function solve() {
	return function (selector, defaultLeft, defaultRight) {
		var element = document.querySelector(selector),
			leftElementsList = defaultLeft || [],
			righElementstList = defaultRight || [];

		var div = document.createElement('div');

		var columnContainer = div.cloneNode();
		columnContainer.className = 'column-container';

		var leftColumn = div.cloneNode();
		leftColumn.className = 'column';

		var rightColumn = leftColumn.cloneNode();

		// selector start
		var leftSelector = div.cloneNode();
		leftSelector.className = 'select';

		var radio = document.createElement('input');
		radio.type = 'radio';
		radio.id = 'select-left-column';
		radio.name = 'column-select';
		radio.checked = true;

		var label = document.createElement('label');
		label.setAttribute('for', 'select-left-column');
		label.innerHTML = 'Add here';
		// selector end

		// ol start
		var leftList = document.createElement('ol');

		addElementsToList(leftList, leftElementsList);

		// ol end
		leftSelector.appendChild(radio);
		leftSelector.appendChild(label);

		leftColumn.appendChild(leftSelector);
		leftColumn.appendChild(leftList);

		// right selector start
		var rightSelector = div.cloneNode();
		rightSelector.className = 'select';

		var radio = document.createElement('input');
		radio.type = 'radio';
		radio.id = 'select-right-column';
		radio.name = 'column-select';

		var label = document.createElement('label');
		label.setAttribute('for', 'select-right-column');
		label.innerHTML = 'Add here';
		// right selector end

		// ol start
		var rightList = document.createElement('ol');

		addElementsToList(rightList, righElementstList);

		// ol end
		rightSelector.appendChild(radio);
		rightSelector.appendChild(label);

		rightColumn.appendChild(rightSelector);
		rightColumn.appendChild(rightList);

		columnContainer.appendChild(leftColumn);
		columnContainer.appendChild(rightColumn);


		element.appendChild(columnContainer);


		var input = document.createElement('input');
		input.setAttribute('size', 40);
		input.setAttribute('autofocus', 'autofocus');

		var button = document.createElement('button');
		button.innerHTML = 'Add';

		element.appendChild(input);
		element.appendChild(button);

		var addBtn = document.getElementsByTagName('BUTTON')[0];

		addBtn.addEventListener('click', function () {
			var leftRadio = document.getElementById('select-left-column');
			var rightRadio = document.getElementById('select-right-column');
			var columns = document.getElementsByClassName('column');
			var inputRow = element.children[1];
			var targetList;

			if (inputRow.value === '' || inputRow.value.trim() === '') {
				// inputRow.value = '';
				return;
			}

			if (leftRadio.checked) {
				targetList = columns[0].getElementsByTagName('OL')[0];
			} else if (rightRadio.checked) {
				targetList = columns[1].getElementsByTagName('OL')[0];
			}

			var newItem = createListItem(inputRow.value.trim());
			inputRow.value = '';

			targetList.appendChild(newItem);
		});

		var container = document.getElementsByClassName('column-container');

		container[0].addEventListener('click', function (ev) {
			if (ev.target.tagName === 'IMG') {
				var textValue = ev.target.nextSibling.data;

				ev.target.parentElement.id = 'remove-this';
				var itemToRemove = document.getElementById('remove-this');
				itemToRemove.parentElement.removeChild(itemToRemove);

				element.children[1].value = textValue;
			} else {
				return;
			}
		});

		function addElementsToList(listElement, elements) {
			if (elements.length) {
				for (var i = 0, len = elements.length; i < len; i += 1) {
					var item = createListItem(elements[i].trim());

					listElement.appendChild(item);
				}
			}
		}

		function createListItem(text) {
			var li = document.createElement('li');
			li.className = 'entry';

			var img = document.createElement('img');
			img.className = 'delete';
			img.src = 'imgs/Remove-icon.png';

			var textNode = document.createTextNode(text.trim());

			li.appendChild(img);
			li.appendChild(textNode);

			return li;
		}
	};
}

// SUBMIT THE CODE ABOVE THIS LINE

if (typeof module !== 'undefined') {
	module.exports = solve;
}