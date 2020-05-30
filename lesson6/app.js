
document.addEventListener('DOMContentLoaded', function(){
  let speed = document.getElementById('windSpeed').innerHTML;
  let temp  = document.getElementById('highTemp').innerHTML;
  let wind = document.getElementById('windChill');
   wind.innerHTML = buildWC(speed, temp);
});




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
  if(checkDay === 'Friday') {
    document.getElementById('checkAds').style.display = "block";
    document.getElementById('toggleMenu').style.top = "6.5em";
  } else {
    document.getElementById('checkAds').style.display = "none";
  }
}
// Way Finding
 function setActive() {

  let ul = document.querySelector('ul');
  let li = document.querySelectorAll('li');

  li.forEach(item => {
    item.addEventListener('click', function() {
      ul.querySelector('.active').classList.remove('active');

      item.classList.add('active');
    });
  });
}
// Function to calculate the Wind 
function buildWC(speed,temp) {
  // let wcTemp = document.getElementById('windChill');

  let wc = 35.74+0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
  console.log(wc);

  wc = Math.floor(wc);

  wc = (wc > temp) ? temp: wc;

  console.log(wc);
  
 return wc;
}
