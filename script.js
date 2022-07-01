'use strict';

const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
const ulList = document.querySelector('.ul-list');
// const closeBtnUnicode = '/u00D7';

btn.addEventListener('click', function (e) {
  const inputVal = input.value;
  if (!inputVal) return;
  input.value = '';
  input.focus();
  console.log(inputVal);
  ulList.insertAdjacentHTML('beforeend', `<li>${inputVal}</li>`);
});

ulList.addEventListener('click', function (e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  }
});
/*
    <ul class="ul-list">
      <li>groceries</li>
      <li>KM assignment</li>
      <li>SoC assignment</li>
      <li>IBA assignment</li>
      <li class="checked">move stuff</li>
    </ul>
*/
