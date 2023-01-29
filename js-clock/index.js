'use strict';

const clockList = document.querySelector('.clock-list');
const btnAddClock = document.querySelector('.btn-add-clock');
const timeZoneSelect = document.querySelector('#timezone');

// Build select list with browser's built-in timezones
const buildTimeZoneSelection = () => {
  const timeZones = Intl.supportedValuesOf('timeZone');

  timeZones.forEach((timeZone) => {
    timeZoneSelect.innerHTML += `<option value='${timeZone}'>${timeZone}</option>`;
  });
};

// Load time zone selection
buildTimeZoneSelection();

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

  // Get the timezone value from the timezone selection
  const tz = timeZoneSelect.value;

  // The tz and uniqueId ensures that each timezone instances
  // will sync with its own timezone.
  setInterval(buildClock, 1000, tz, uniqueId);
};

// Build the clock with unique ids
const buildClock = (tz, uniqueId) => {
  // Get the current time
  const now = new Date();
  // Convert the local time with the selected timezone
  const convertedToTz = now.toLocaleString('en-US', {
    timeZone: tz,
  });

  document.getElementById(
    `clock-${uniqueId}`
  ).innerText = `${convertedToTz} - ${tz}`;
};

const formatTo2Digits = (num) => {
  return num.toString().padStart(2, '0');
};

// References helped me to build this project:

// https://stackoverflow.com/questions/66175847/create-multiple-clocks-in-a-generated-list-with-button-click-using-javascript

// https://bobbyhadz.com/blog/javascript-convert-date-to-timezone
