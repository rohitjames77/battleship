class Ship {
  constructor() {
    this.gridLength = 5;
  }
  hit(player1Coordinates, player2Coordinates) {
    let hits = 0;
    let missed = 0;
    if (player1Coordinates === player2Coordinates) {
      hits++;
      console.log(hits);
      return hits;
    } else if (player1Coordinates !== player2Coordinates) {
      console.log("Missed");
      missed++;
      return missed;
    }
  }
  isSunk() {}
}
const carrier = new Ship();
export { carrier };
