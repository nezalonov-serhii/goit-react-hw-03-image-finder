import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '?key=33331302-a2f968128fc99efede8b05269';
const BASE_OPTIONS = '&image_type=photo&orientation=horizontal&per_page=12';

export async function fetchImages(searchName, page) {
  let searchField = `&q=${searchName}`;
  let pageField = `&page=${page}`;

  const fetchImg = await axios.get(
    `${BASE_URL}${API_KEY}${searchField}${BASE_OPTIONS}${pageField}`
  );

  return fetchImg.data;
}
