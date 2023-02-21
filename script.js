import dayNightTheme from './dayNightTheme.js';

const input = document.querySelector('input');

const api = {
  endpoint: 'https://api.unsplash.com/',
  clientId: 'SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo',
  page: 8,
  perPage: 30,
  query: 'kitty',
};
function enter(e) {
  if (e.keyCode === 13) {
    getDataSearch();
  }
}

async function getData() {
  const url = `${api.endpoint}search/photos?query=${api.query}&per_page=${api.perPage}&page=${api.page}&client_id=${api.clientId}`;
  const res = await fetch(url);
  const data = await res.json();
  showImages(data);
}

async function getDataSearch() {
  document.querySelector('#grid').textContent = '';
  const url =
    `${api.endpoint}search/photos?query=` +
    input.value +
    `&per_page=${api.perPage}&page=${api.page}&client_id=${api.clientId}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })

    .then((data) => {
      showImages(data);
    })

    .catch((error) => console.log(error));
}

function showImages(data) {
  for (let i = 0; i < data.results.length; i++) {
    let image = document.createElement('div');
    image.className = 'image';

    image.style.backgroundImage =
      'url(' + data.results[i].urls.raw + '&w=1366&h=768' + ')';

    image.addEventListener('click', () => {
      window.open(data.results[i].links.download, '_blank');
    });

    document.querySelector('#grid').appendChild(image);
  }
}

window.addEventListener('load', dayNightTheme);
getData();
document.querySelector('#search').addEventListener('click', getDataSearch);
input.addEventListener('keypress', enter);
