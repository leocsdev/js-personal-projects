'use strict';

const clockList = document.querySelector('.clock-list');

const tick = () => {
  const now = new Date();

  const hh = formatTo2Digits(now.getHours());
  const mm = formatTo2Digits(now.getMinutes());
  const ss = formatTo2Digits(now.getSeconds());

  // Update UI
  const html = `
    <li class="clock-list-item">${hh}:${mm}:${ss}</li>
  `;

  clockList.innerHTML = html;
};

const formatTo2Digits = (num) => {
  return num.toString().padStart(2, '0');
};

// Update every second
setInterval(tick, 1000);
