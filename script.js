'use strict';

const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
const ulList = document.querySelector('.ul-list');
const nodeListItems = document.querySelectorAll('li');

btn.addEventListener('click', function (e) {
  // get input value from HTML
  const inputVal = input.value;
  if (!inputVal) return;

  // resetting input field and focusing
  input.value = '';
  input.focus();

  // attach input field value at the end of UL
  ulList.insertAdjacentHTML(
    'beforeend',
    `<li>${inputVal}<span class="close">×</span></li>`
  );
  closeBtnAttach();
});

// class toggling when clicked on list item
ulList.addEventListener('click', function (e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  }
});

// attach close button on each li
nodeListItems.forEach(val => {
  const span = document.createElement('SPAN');
  const closeSymbol = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(closeSymbol);
  val.appendChild(span);
});

// display none when clicked on X
const closeBtnAttach = function () {
  const closeBtn = document.querySelectorAll('.close');
  closeBtn.forEach(val =>
    val.addEventListener('click', function (e) {
      this.parentElement.style.display = 'none';
    })
  );
};

closeBtnAttach();

// TODO:
// Insert add when pressing enter
