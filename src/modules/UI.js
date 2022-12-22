import { getScores } from './leaders.js';

export default class UI {
  static addLeader(leader) {
    const leaderRank = document.getElementById('leaderboard');
    const ul = document.createElement('ul');
    ul.classList.add('unordered-list');

    ul.innerHTML = `
       <p class ="leader-name"><ion-icon name="person"></ion-icon>${leader.user}  :</p>
      <p class ="leader-score">${leader.score}</p>
    
      `;

    leaderRank.appendChild(ul);
  }

  static async displayLeader() {
    const leaders = await getScores();

    leaders.result.forEach((leader) => {
      UI.addLeader(leader);
    });
  }
}
