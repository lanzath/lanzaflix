import config from '../config';

const VIDEOS_URL = `${config.BACKEND_URL}/videos`;

/**
 * Stores a newly resource in db
 * @param {object} videoObject
 * @returns {JSON}
 */
function create(videoObject) {
  return fetch(`${VIDEOS_URL}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(videoObject)
  })
    .then(async (response) => {
      if (response.ok) {
        const jsonResponse = await response.json();
        return jsonResponse;
      }
      throw new Error('Error: Could not save data');
    });
}

export default {
  create,
};
