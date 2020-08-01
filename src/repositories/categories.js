import config from '../config';

const CATEGORIES_URL = `${config.BACKEND_URL}/categories`;

/**
 * Returns a collection with all registered categories
 * @returns {JSON} Json
*/
function getAll() {
  return fetch(CATEGORIES_URL)
  .then(async (response) => {
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Error: Cannot connet to server');
  });
}

/**
 * Returns a collection of categories with their videos
 * @returns {JSON} Json
 */
function getAllWithVideos() {
  return fetch(`${CATEGORIES_URL}?_embed=videos`)
    .then(async (response) => {
      if (response.ok) {
        const jsonResponse = await response.json();
        return jsonResponse;
      }
      throw new Error('Error: Cannot connet to server');
    });
}

export default {
  getAllWithVideos,
  getAll
};
