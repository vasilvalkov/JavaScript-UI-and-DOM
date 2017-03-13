/* globals $ */

/* 

Create a function that takes an id or DOM element and:
  

*/

function solve() {
  return function (selector) {
    var el;

    if (arguments.length !== 1) {
      throw Error('Invalid parameters count!');
    }

    if (typeof selector !== 'string' && !(selector instanceof HTMLElement)) {
      throw Error('Invalid element or id!');
    }

    if (typeof selector === 'string') {
      el = document.getElementById(selector);
      if (!el) {
        throw Error('No such element!');
      }
    } else {
      el = selector;
    }

    var nodes = el.querySelectorAll('.button' || '.content');
    var nodesArr = [].slice.apply(nodes);

    for (var i = 0, len = nodes.length; i < len; i += 1) {
      if (nodesArr[i].className === 'button') {
        nodesArr[i].innerHTML = 'hide';
      }
    }

    //nodesArr.filter(node => node.className === 'button')
    //        .forEach(node => {node.innerHTML = 'hide'});

    el.addEventListener('click', function (ev) {
      if (ev.target.className === 'button') {
        var content = ev.target.nextElementSibling;

        while (content && content.className.indexOf('content') < 0) {
          content = content.nextElementSibling;
        }

        if (content.style.display === '') {
          content.style.display = 'none';
          ev.target.innerHTML = 'show';
        } else {
          content.style.display = '';
          ev.target.innerHTML = 'hide';
        }
      }
    });
  };
};

module.exports = solve;