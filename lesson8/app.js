
document.addEventListener('DOMContentLoaded', function(){
// Lazy Loading
 const imagesToLoad = document.querySelectorAll("img[data-src]");

 function preloadImage(img) {
   const src= img.getAttribute("data-src");
   if(!src) {
     return;
   }
   img.src = src;
 }

 const imageOptions = {
   threshold:1,
   rootMargin: "0px 0px 100px 0px"
 };

 const imgObserver = new IntersectionObserver((entries,imgObserver) => {
   entries.forEach(entry => {

     if(!entry.isIntersecting) {
      return;
    }
     else {
       preloadImage(entry.target);
       imgObserver.unobserve(entry.target);
       entry.target.style.filter = 'blur(0px)';
     }
   });
 },imageOptions);

 imagesToLoad.forEach(image =>  {
   imgObserver.observe(image);
 });


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

// Adjust Rating 
function adjustRating(rating) {
  document.getElementById('ratingValue').innerHTML =rating;
}


