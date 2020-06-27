
document.addEventListener('DOMContentLoaded', function(){
  let currDate = document.getElementById('lastUpdated');
  let speed = document.getElementById('windSpeed').innerHTML;
  let temp  = document.getElementById('highTemp').innerHTML;
  let wind = document.getElementById('windChill');
   wind.innerHTML = buildWC(speed, temp);
   currDate.textContent = checkDate();
});




let mainNav = document.getElementById('menu');
let navToggle = document.getElementById('toggleMenu');

navToggle.addEventListener('click', function() {
  mainNav.classList.toggle('popUp');
})


function checkDate() {
  let daysName=[
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday'
	];

	let months =[
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
	]
	let date =new Date(document.lastModified);
	let dayName = daysName[date.getDay()];
	let monthName = months[date.getMonth()];
	let year = date.getFullYear();
	let fullDate = `${dayName}, ${date.getDate()} ${monthName} ${year}`;
	return fullDate;
}

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
// Function to calculate the Wind Chill 
function buildWC(speed,temp) {

  let wc = 35.74+0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
  console.log(wc);

  wc = Math.floor(wc);

  wc = (wc > temp) ? temp: wc;

  console.log(wc);
  
  return wc;

}


const apiURL ="https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=52fa734615c3297e4629a551ba7a39fc";
fetch(apiURL) 
  .then(response => {
    if(response.ok) {
      return response.json();
    }
    throw new ERROR('Network response was not ok');
  })

  .then(jsObject=> {
    console.log(jsObject);
    document.querySelector('#weatherDesc').textContent = jsObject.weather[0].main;
    document.querySelector('#highTemp').textContent = Math.round(jsObject.main.temp);
    document.querySelector('#windSpeed').textContent = jsObject.wind.speed;
    document.querySelector('#humid').textContent = jsObject.main.humidity;
  })


const url ="https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=6bfa38a5c2a349e9ca7233d67d045cb8";
fetch(url) 
  .then(response => {
    if(response.ok) {
      return response.json();
    }
    throw new ERROR('Network response was not ok');
  })

  .then(jsData => {
    console.log(jsData);
    let forecastTable = document.getElementById('dataForecasts');
    let dayForeCast = document.getElementById('dayForecast')
    jsData.list.forEach(element => {
        if(element.dt_txt.includes('18:00:00')) {
          let title = document.createElement('th');
          let tableData = document.createElement('td');
          let img = document.createElement("img");
          let temp = document.createElement("div");
          let description = document.createElement("small");

          img.setAttribute('src','https://openweathermap.org/img/w/' + element.weather[0].icon + '.png');
          img.setAttribute('alt',element.weather[0].description);
        
          temp.textContent = Math.round(element.main.temp) + ' °F';  
          description.textContent = element.weather[0].description;
          temp.append(description);
          tableData.append(img,temp);
          forecastTable.appendChild(tableData);

          title.textContent = dayOfWeek(element.dt_txt);
          dayForeCast.append(title);
        }       
  }) 

});




  function dayOfWeek(day) {
    let daysName= ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let date = new Date(day);
    let dayName = daysName[date.getDay()];
    let nameOfDay = `${dayName}`;
    return nameOfDay;
  }