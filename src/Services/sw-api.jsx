// base url of Star api https://swapi.dev/api/starships/


const BASE_URL = 'https://swapi.dev/api/starships/';

export async function getAllStarships() {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.results; // Return the array of starships
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
    return []; // Return an empty array in case of error
  }
}

