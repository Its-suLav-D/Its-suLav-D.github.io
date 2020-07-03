document.addEventListener('DOMContentLoaded', function(){
    let currDate = document.getElementById('lastUpdated');
     currDate.textContent = checkDate();
  });
  


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