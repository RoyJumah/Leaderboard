import { getScores } from './leaders.js';

export default class UI {
  static addLeader(leader) {
    const leaderRank = document.getElementById('leaderboard');
    const ul = document.createElement('ul');
    ul.classList.add('unordered-list');

    ul.innerHTML = `
       <p class ="leader-name">${leader.user}:</p>
      <p class ="leader-score">${leader.score}</p>
    
      `;

    leaderRank.appendChild(ul);
  }

  static async displayLeader() {
    const leaders = await getScores();
    let lastRenderedData;

    if (JSON.stringify(leaders) !== JSON.stringify(lastRenderedData)) {
      lastRenderedData = leaders;
      leaders.result.forEach((leader) => {
        UI.addLeader(leader);
      });
    }
  }
}
