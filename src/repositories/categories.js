import config from '../config';

const CATEGORIES_URL = `${config.BACKEND_URL}/categories`;

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
};
