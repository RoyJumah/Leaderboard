export default class LeaderboardStore {
  static getLeaders() {
    let leaders;
    if (localStorage.getItem('leaders') === null) {
      leaders = [];
    } else {
      leaders = JSON.parse(localStorage.getItem('leaders'));
    }
    return leaders;
  }

  static addLeader(leader) {
    const leaders = this.getLeaders();
    leaders.push(leader);
    localStorage.setItem('leaders', JSON.stringify(leaders));
  }
}
