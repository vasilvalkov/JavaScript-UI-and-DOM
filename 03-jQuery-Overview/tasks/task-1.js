/* globals $ */

/* 

Create a function that takes a selector and COUNT, then generates inside a UL with COUNT LIs:   
  * The UL must have a class `items-list`
  * Each of the LIs must:
    * have a class `list-item`
    * content "List item #INDEX"
      * The indices are zero-based
  * If the provided selector does not selects anything, do nothing
  * Throws if
    * COUNT is a `Number`, but is less than 1
    * COUNT is **missing**, or **not convertible** to `Number`
      * _Example:_
        * Valid COUNT values:
          * 1, 2, 3, '1', '4', '1123'
        * Invalid COUNT values:
          * '123px' 'John', {}, [] 
*/

function solve() {
  return function (selector, count) {
    if (arguments.length !== 2) {
      throw Error('Exactly 2 parameters expected!');
    }

    if (typeof selector !== 'string') {
      throw Error('Invalid selector. Selector must be a string');
    }

    if (typeof count !== 'number' || Number.isNaN(count) || count < 1) {
      throw Error('Invalid count!');
    }

    var $el = $(selector);

    if ($el.length) {
      var $list = $('<ul/>').addClass('items-list');

      for (var i = 0; i < count; i += 1) {
        $('<li/>')
          .addClass('list-item')
          .html('List item #' + i)
          .appendTo($list);
      }

      $el.append($list);
    }
  };
}

module.exports = solve;