'use strict';

const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
const ulList = document.querySelector('.ul-list');

btn.addEventListener('click', function (e) {
  const inputVal = input.value;
  console.log(inputVal);
  ulList.insertAdjacentHTML('beforeend', `<li>${inputVal}</li>`);
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
