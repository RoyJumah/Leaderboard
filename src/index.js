// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';
import Leaderboard from './modules/leaders.js';
import UI from './modules/UI.js';
import LeaderboardStore from './modules/leadersData.js';

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = form.name.value;
  const score = form.score.value;

  const leader = new Leaderboard(name, score);
  UI.addLeader(leader);
  LeaderboardStore.addLeader(leader);

  form.reset();
});

document.addEventListener('DOMContentLoaded', () => {
  UI.displayLeader();
});
