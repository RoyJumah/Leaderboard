const GAME_ID = 'UxBxZKEyzgfxoH7a7brP';

const postScore = async function (newscore) {
  const scoreResponse = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${GAME_ID}/scores/`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newscore),
    }
  );
  const scoreData = await scoreResponse.json();
  console.log(scoreData);
  return scoreData;
};

const getScores = async function () {
  const response = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${GAME_ID}/scores/ `
  );

  const data = await response.json();
  console.log(data);
  return data;
};

export { postScore, getScores };
