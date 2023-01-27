'use strict';

const clockList = document.querySelector('.clock-list');
const btnAddClock = document.querySelector('.btn-add-clock');

let uniqueId = 0;

//add 1 to uniqueID everytime the 'Add' button is clicked
const addUniqueId = () => {
  return uniqueId++;
};

btnAddClock.addEventListener('click', () => {
  addUniqueId();
  addClockToList();
});

// Add single clock to the list
const addClockToList = () => {
  const li = document.createElement('li');
  li.classList.add('list-item');
  li.id = `clock-${uniqueId}`;
  clockList.appendChild(li);

  setInterval(buildClock, 1000, uniqueId);
};

// Build the clock with unique ids
const buildClock = (uniqueId) => {
  const now = new Date();
  const hh = formatTo2Digits(now.getHours());
  const mm = formatTo2Digits(now.getMinutes());
  const ss = formatTo2Digits(now.getSeconds());

  document.getElementById(`clock-${uniqueId}`).innerText = `${hh}:${mm}:${ss}`;
};

const formatTo2Digits = (num) => {
  return num.toString().padStart(2, '0');
};

// check this article
// https://stackoverflow.com/questions/66175847/create-multiple-clocks-in-a-generated-list-with-button-click-using-javascript
