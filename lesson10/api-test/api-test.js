const apiURL ="https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=52fa734615c3297e4629a551ba7a39fc";
fetch(apiURL)
    .then((response)=> response.json())
    .then((jsObject)=> {
        console.log(jsObject);
    document.querySelector('#current-temp').textContent = jsObject.main.temp;
    // const imagesrc= 'https://openweathermap.org/img/w/'+ jsObject.weather[0].icon+'.png';
    const imagesrc ='https://openweathermap.org/img/w/'+ jsObject.weather[0].icon+'.png';
    const desc = jsObject.weather[0].description;
    document.getElementById('imagesrc').textContent = imagesrc;
    document.getElementById('icon').setAttribute('src', imagesrc);
    document.querySelector('#icon').setAttribute('alt', desc);
    })

const url ="http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=6bfa38a5c2a349e9ca7233d67d045cb8";
fetch(url) 
  .then(response => {
    if(response.ok) {
      return response.json();
    }
    throw new ERROR('Network response was not ok');
  })

  .then(jsData => {
    console.log(jsData);
    let forecastArray =[];
    jsData.list.forEach(element => {
        let newArray =[];
        if(element.dt_txt.includes('18:00:00')) {
            newArray.push(dayOfWeek(element.dt_txt));
            newArray.push(element.main.temp);
            newArray.push(element.weather[0].icon);
            forecastArray.push(newArray);
        }
        
    });
    console.log(forecastArray);
    let forecastDays = document.querySelector('#card');
    forecastArray.forEach(e => {
        forecastDays += '<th>'+e[0]+'</th>';
        let icon = 'https://openweathermap.org/img/w/'+e[2]+'.png';
        forecastDays.innerHTML += '<td><img src="' + icon +'" alt="Forecast icon">'
        +Math.round(e[1])+'</td>';
        })
  });


  function dayOfWeek(day) {
    let daysName= ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let date = new Date(day);
    let dayName = daysName[date.getDay()];
    let nameOfDay = `${dayName}`;
    return nameOfDay;
  }