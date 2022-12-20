import LeaderboardStore from './leadersData.js';

export default class UI {
  static addLeader(leader) {
    const leaderRank = document.getElementById('leaderboard');
    const ul = document.createElement('ul');
    ul.classList.add('unordered-list');
    ul.innerHTML = `
       <p><b>${leader.name}</b> :</p>
      <p><b>${leader.score}</b></p>
    
      `;

    leaderRank.appendChild(ul);
  }

  static displayLeader() {
    const leaders = LeaderboardStore.getLeaders();
    leaders.forEach((leader) => {
      UI.addLeader(leader);
    });
  }
}
