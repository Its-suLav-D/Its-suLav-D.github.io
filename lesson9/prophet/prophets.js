const url = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(url)
    .then(function(response) {
        if(response.ok) {
            return response.json();
        }
   throw new ERROR('Network response was not ok'); 
})
.then(function(jsonObject){
    console.table(jsonObject); // temporary checking for valid response and data parsing 
    const prophets = jsonObject['prophets'];
    prophets.forEach(prophet => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        h2.classList.add('prophet-title');
        let dob = document.createElement('p');
        dob.classList.add('prophet-info');
        let pob = document.createElement('p');
        pob.classList.add('prophet-infos');
        let image = document.createElement('img');
        

        h2.textContent = `${prophet.name} ${prophet.lastname}`;
        dob.textContent = `Date of Birth: ${prophet.birthdate}`;
        pob.textContent = `Place of Birth: ${prophet.birthplace}`;
        image.setAttribute('src',prophet.imageurl);
        
        card.append(h2,dob,pob,image);
        document.querySelector('div.cards').appendChild(card);
       
})
})
.catch(function(error){
    console.log('Fetch error: ', error.message);
});
 


