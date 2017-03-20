/* globals $ */

/*
Create a function that takes a selector and:
* Finds all elements with class `button` or `content` within the provided element
  * Change the content of all `.button` elements with "hide"
* When a `.button` is clicked:
  * Find the topmost `.content` element, that is before another `.button` and:
    * If the `.content` is visible:
      * Hide the `.content`
      * Change the content of the `.button` to "show"       
    * If the `.content` is hidden:
      * Show the `.content`
      * Change the content of the `.button` to "hide"
    * If there isn't a `.content` element **after the clicked `.button`** and **before other `.button`**, do nothing
* Throws if:
  * The provided ID is not a **jQuery object** or a `string` 

*/
function solve() {
  return function (selector) {
    var $el,
      $buttons;

    if (arguments.length !== 1) {
      throw Error('Invalid parameters count!');
    }

    if (typeof selector !== 'string' || !selector.length) {
      throw Error('Invalid element or id!');
    }

    if (typeof selector === 'string') {
      $el = $(selector);
    } else {
      $el = selector;
    }

    if (!$el.length) {
      throw Error('No such element!');
    }

    function showHide() {
      var $this = $(this);
      var $cont = $this.next();
      var $button;

      while ($cont.length && !$cont.hasClass("content")) {
        $cont = $cont.next();
      }

      if ($cont.css("display") === '' || $cont.css("display") === 'block') {
        $cont.css("display", "none");
        $this.html('show');
      } else {
        $cont.css("display", "");
        $this.html('hide');
      }
    }

    $buttons = $('.button').html('hide');

    $el.on('click', 'a.button', showHide);
  };
};

module.exports = solve;