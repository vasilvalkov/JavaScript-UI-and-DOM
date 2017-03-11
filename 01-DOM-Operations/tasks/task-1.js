/* globals $ */

/* 

Create a function that takes an id or DOM element and an array of contents

* if an id is provided, select the element
* Add divs to the element
  * Each div's content must be one of the items from the contents array
* The function must remove all previous content from the DOM element provided
* Throws if:
  * The provided first parameter is neither string or existing DOM element
  * The provided id does not select anything (there is no element that has such an id)
  * Any of the function params is missing
  * Any of the function params is not as described
  * Any of the contents is neight `string` or `number`
    * In that case, the content of the element **must not be** changed   
*/

module.exports = function solve() {
  return function (element, contents) {
    var el;

    if (arguments.length !== 2) {
      throw Error('Invalid parameters count!');
    }

    if (typeof element !== 'string' && !(element instanceof HTMLElement)) {
      throw Error('Invalid element or id!');
    }

    if (!Array.isArray(contents)) {
      throw Error('Contents must be provided as an array!');
    }

    for(var i in contents) {
      if (typeof contents[i] !== 'string' && typeof contents[i] !== 'number') {
        throw Error('Invalid content');
      }
    }

    if (typeof element === 'string') {
      el = document.getElementById(element);
      if (!el) {
        throw Error('No element with this id!');
      }
    } else {
      el = element;
    }

    while (el.firstChild) {
      el.removeChild(el.firstChild);
    }

    for (var i = 0, len = contents.length; i < len; i += 1) {
      var div = document.createElement("div");
      div.innerHTML = contents[i];

      el.appendChild(div);
    }
  };
}