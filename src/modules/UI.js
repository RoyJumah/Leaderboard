import { getScores } from './leaders.js';

export default class UI {
  static addLeader(leader, rank) {
    const leaderRank = document.getElementById('leaderboard');
    const ul = document.createElement('ul');
    ul.classList.add('unordered-list');

    ul.innerHTML = `
      <li class="leader-rank">${rank}</li>
      <li class="leader-player">
        <div class="player-info">
          <svg class = "player-avatar" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <p class="player-name">${leader.user}</p>
        </div>
      </li>
      <li class="leader-score">${leader.score}</li>
    `;

    leaderRank.appendChild(ul);
  }

  static async displayLeader() {
    const leaders = await getScores();
    let lastRenderedData;

    if (JSON.stringify(leaders) !== JSON.stringify(lastRenderedData)) {
      lastRenderedData = leaders;
      // Sort the leaders array by score in descending order
      const sortedLeaders = leaders.result.sort((a, b) => b.score - a.score);
      // Add the leaders with their corresponding rank
      sortedLeaders.forEach((leader, index) => {
        UI.addLeader(leader, index + 1);
      });
    }
  }
}
