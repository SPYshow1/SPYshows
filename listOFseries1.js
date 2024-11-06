const shareButton = document.getElementById("my_list_section2");

if (navigator.share) {
    
shareButton.addEventListener("click", async () => {
      try {
        
await navigator.share({
          title: 'Check this out!',
          text: 'share',
          url: window.location.href  
        });
        console.log('share successful');
      } catch (error) {
        console.error('share failed', error);
      }
    });
  } else {
    console.log('Something wrong');
  }


function getFilmFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('film');
}

let films = {
  
// start section of series


// end section of series

};

fetch('https://raw.githubusercontent.com/SPYshow1/SPYshows/main/films.json')
  .then(response => response.json())
  .then(data => {
    films = data; 
    
    const filmId = getFilmFromUrl();

    if (films[filmId]) {
      document.getElementById('film-title').textContent = films[filmId].title;
      document.getElementById('film-description').textContent = films[filmId].description;
      document.getElementById('film-kind').textContent = films[filmId].kind;
      document.getElementById('film-trailer').innerHTML = films[filmId].trailer;
    
    } else {
      document.getElementById('film-title').textContent = "Film not found";
      document.getElementById('film-description').textContent = "";
    }
  })
  .catch(error => console.error('Error fetching the JSON:', error));

let wa = document.getElementById('watch-film');
wa.addEventListener('click', () => {
  const filmId = getFilmFromUrl();
  const filmUrl = films[filmId]?.wa;
  if (filmUrl) {
    window.location.href = filmUrl;
  }
});

  function onflix(page) {
    window.location.href = page
  }
  
  let chevrons1 = document.getElementById('chevrons1')
  
    let chevronss1 = document.getElementById('chevronss1')

  
  let list1 = document.getElementById('show_l1')
  
  chevrons1.addEventListener('click', () => {
    list1.classList.remove('hide')
  chevrons1.classList.add('hide')
  chevronss1.classList.remove('hide')
  })
  
  chevronss1.addEventListener('click', () => {
    list1.classList.add('hide')
    chevrons1.classList.remove('hide')
    chevronss1.classList.add('hide')
  })
console.log(getFilmFromUrl());



