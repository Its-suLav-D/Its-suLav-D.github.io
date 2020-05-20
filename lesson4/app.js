
let mainNav = document.getElementById('menu');
let navToggle = document.getElementById('toggleMenu');

navToggle.addEventListener('click', function() {
  mainNav.classList.toggle('popUp');
})


let daysNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];
let months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

let date = new Date(document.lastModified);
let dayName = daysNames[date.getDay()];
let monthName = months[date.getMonth()];
let year = date.getFullYear();
let fullDate = dayName + ', '+ date.getDate() +" " + monthName + " "+ year;

document.getElementById('lastUpdated').textContent = fullDate;
