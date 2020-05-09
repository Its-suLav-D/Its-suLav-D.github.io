document.getElementById('lastUpdated').innerHTML = document.lastModified;
// returns  the last modified date to the span id.



let mainNav = document.getElementById('menu');
let navToggle = document.getElementById('toggleMenu');

navToggle.addEventListener('click', function() {
  mainNav.classList.toggle('popUp');
})
