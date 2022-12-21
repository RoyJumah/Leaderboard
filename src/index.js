// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';
import Leaderboard from './modules/leaders.js';
import UI from './modules/UI.js';
import LeaderboardStore from './modules/leadersData.js';
import { postScore, getScores } from './modules/leaders.js';

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
  UI.displayLeader();
});
