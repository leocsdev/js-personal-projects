'use strict';

const clockList = document.querySelector('.clock-list');
const btnAddClock = document.querySelector('.btn-add-clock');

btnAddClock.addEventListener('click', () => {
  tick();
  // setTimeout(tick, 1000);
});

const tick = () => {
  const now = new Date();

  const hh = formatTo2Digits(now.getHours());
  const mm = formatTo2Digits(now.getMinutes());
  const ss = formatTo2Digits(now.getSeconds());

  // // Update UI
  // const html = `
  //   <li class="clock-list-item">${hh}:${mm}:${ss}</li>
  // `;

  // clockList.innerHTML = html;
  console.log(`${hh}:${mm}:${ss}`);
  setTimeout(tick, 1000);
};

const formatTo2Digits = (num) => {
  return num.toString().padStart(2, '0');
};

// // Update every second
// setInterval(tick, 1000);

// tick();

// check this article

// https://stackoverflow.com/questions/66175847/create-multiple-clocks-in-a-generated-list-with-button-click-using-javascript
