import axios from 'axios';

const key = '12774911-b20dcfb89f4d577a4321e9bc7';
const BASE_URL =
  'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=';
const fetchImages = (query, pageNumber) =>
  axios.get(`${BASE_URL + query}&page=${pageNumber}&per_page=12&key=${key}`);

export default fetchImages;
