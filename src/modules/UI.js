import LeaderboardStore from './leadersData.js';

export default class UI {
  static addLeader(leader) {
    const leaderRank = document.getElementById('leaderboard');
    const ul = document.createElement('ul');
    ul.classList.add('unordered-list');
    ul.innerHTML = `
       <p class ="leader-name">${leader.name} :</p>
      <p class ="leader-score">${leader.score}</p>
    
      `;

    leaderRank.appendChild(ul);
  }

  static displayLeader() {
    const leaders = LeaderboardStore.getLeaders();
    leaders.forEach(leader => {
      UI.addLeader(leader);
    });
  }
}
