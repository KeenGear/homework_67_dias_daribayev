const container = document.getElementById('container');

function createCard(character) {
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('card-container');

  const image = document.createElement('img');
  image.classList.add('character-img');
  image.src = character.image;
  cardContainer.appendChild(image);

  const cardText = document.createElement('div');
  cardText.classList.add('card-text');

  const name = document.createElement('div');
  name.classList.add('name');
  name.textContent = character.name;
  cardText.appendChild(name);

  const status = document.createElement('div');
  status.classList.add('status');
  status.textContent = `Status: ${character.status}`;
  cardText.appendChild(status);

  const location = document.createElement('div');
  location.classList.add('location');
  location.textContent = `Location: ${character.location.name}`;
  cardText.appendChild(location);

  const firstEpisode = document.createElement('div');
  firstEpisode.classList.add('first-episode');
  const firstEpisodeUrl = character.episode[0];
  fetch(firstEpisodeUrl)
      .then(response => response.json())
      .then(data => {
          firstEpisode.textContent = `First seen in: ${data.name}`;
      });
  cardText.appendChild(firstEpisode);

  // const lastEpisode = document.createElement('div');
  // lastEpisode.classList.add('lastEpisode');
  // const lastEpisodeUrl = character.episode[character.episode.length - 1];
  // fetch(lastEpisodeUrl)
  //   .then(response => response.json())
  //   .then(data => {
  //     lastEpisode.textContent = `Last Episode: ${data.name}`;
  //   });
  // cardText.appendChild(lastEpisode);

  cardContainer.appendChild(cardText);

  cardContainer.addEventListener('click', () => {
    window.location.href = `character.html?id=${character.id}`;
  });

  return cardContainer;
}

fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => {
    const characters = data.results;
    characters.forEach(character => {
      const card = createCard(character);
      container.appendChild(card);
    });
  });
