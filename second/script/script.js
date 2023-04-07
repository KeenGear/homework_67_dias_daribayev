const container = document.getElementById('container');

function createCard(character) {
  const card = document.createElement('div');
  card.classList.add('card');

  const image = document.createElement('img');
  image.classList.add('character-img');
  image.src = character.image;
  card.appendChild(image);

  const name = document.createElement('div');
  name.textContent = character.name;
  card.appendChild(name);

  card.addEventListener('click', () => {
    window.location.href = `character.html?id=${character.id}`;
  });

  return card;
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
