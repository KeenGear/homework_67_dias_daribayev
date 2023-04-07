const container = document.getElementById('container');
const params = new URLSearchParams(window.location.search);
const characterId = params.get('id');

fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
  .then(response => response.json())
  .then(character => {
    const details = document.createElement('div');
    details.innerHTML = `
      <img class="character-img" src="${character.image}">
      <h1>${character.name}</h1>
      <p><strong>Status:</strong> ${character.status}</p>
      <p><strong>Species:</strong> ${character.species}</p>
      <p><strong>Type:</strong> ${character.type || 'Unknown'}</p>
      <p><strong>Gender:</strong> ${character.gender}</p>
      <p><strong>Origin:</strong> ${character.origin.name}</p>
      <p><strong>Location:</strong> ${character.location.name}</p>
    `;
    container.appendChild(details);
  });
