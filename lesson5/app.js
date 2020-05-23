
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


function checkAd() {
  let dayName = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  let date = new Date();
  let checkDay = dayName[date.getDay()];
  if(checkDay === 'Thursday') {
    document.getElementById('checkAds').style.display = "block";
    document.getElementById('toggleMenu').style.top = "6.5em";
  } else {
    document.getElementById('checkAds').style.display = "none";
  }
}

 function setActive() {
  let ul = document.querySelector('ul');
  let li = document.querySelectorAll('li');

  li.forEach(el => {
    el.addEventListener('click', function() {
      ul.querySelector('.active').classList.remove('active');

      el.classList.add('active');
    });
  });
}
