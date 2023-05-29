import './style.css';
import { postScore } from './modules/leaders.js';
import UI from './modules/UI.js';

const form = document.getElementById('form');
const refreshBtn = document.querySelector('.refresh-btn');

form.addEventListener('submit', event => {
  event.preventDefault();

  const user = form.name.value;
  const score = form.score.value;

  if (!user || !score) return;
  const newscore = {
    user,
    score,
  };
  postScore(newscore);

  form.reset();
});

refreshBtn.addEventListener('click', () => {
  const leaderRank = document.getElementById('leaderboard');
  leaderRank.innerHTML = '';
  UI.displayLeader();
});

//preloader
document.onreadystatechange = function () {
  if (document.readyState !== 'complete') {
    document.querySelector('body').style.visibility = 'hidden';
    document.querySelector('#preloader').style.visibility = 'visible';
  } else {
    setTimeout(() => {
      document.querySelector('#preloader').style.display = 'none';
    }, 3500);
    document.querySelector('body').style.visibility = 'visible';
  }
};
