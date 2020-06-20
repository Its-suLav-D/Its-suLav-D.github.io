 function loadCity() {

        const url = 'towndata.json';
        fetch(url)
            .then(function(response){
                if(response.ok) {
                    return response.json();
                }
                throw new ERROR('Network response was not ok');
            })
        
            .then(function(jsonObject){
                console.log(jsonObject);
        
                let information =jsonObject['towns'];
                let preston, sodasprings, fishaven;
                information.forEach(item => {
                
                switch(item.name)  {
                    case "Preston":
                        preston =cities(item);
                        break;
                    case "Fish Haven":
                        fishaven = cities(item);
                        break;
                    case "Soda Springs":
                        sodasprings = cities(item);
                        break;
                }
                });
                document.querySelector('section').append(preston,fishaven,sodasprings);

            })
        }

             function cities(city) {
                let article = document.createElement('article');
                article.setAttribute('class', 'article-holder');
                let div = document.createElement('div');
                div.setAttribute('class','data-info')

                let image = document.createElement('img');
                image.setAttribute('src', city.photo);
                image.setAttribute('class','town-images');
                image.setAttribute('alt',`town-images`);
        
                let name = document.createElement('h2');
                name.textContent =city.name;
                let motto = document.createElement('span');
                motto.textContent =city.motto;
                motto.setAttribute('class','town-motto');
                let yearFounded = document.createElement('p');
                yearFounded.textContent = `Year Founded: ${city.yearFounded}`;
                let currentPopln = document.createElement('p');
                currentPopln.textContent =`Population: ${city.currentPopulation}`;
                let avgRainfall =document.createElement('p');
                avgRainfall.textContent =`Annual Rain Fall: ${city.averageRainfall}`;


                div.append(name,motto,yearFounded,currentPopln,avgRainfall);
                article.appendChild(div);
                article.appendChild(image);
                return article;
            }
