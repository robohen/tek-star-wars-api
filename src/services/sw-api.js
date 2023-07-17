import axios from 'axios';

const BASE_URL = 'https://swapi.dev/api';

export async function getAllStarships() {
  try {
    const response = await axios.get(`${BASE_URL}/starships/`);
    return response.data.results;
  } catch (error) {
    console.error('There was an error fetching starships:', error);
    return null;
  }}
