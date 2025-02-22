class Ship {
  constructor(gridLength) {
    this.gridLength = gridLength;
  }
  hit(player1Coordinates, player2Coordinates) {
    let hits = 4;

    if (player1Coordinates === player2Coordinates) {
      hits++;
      console.log(hits);
    }
    return hits;
  }
  isSunk(hit,gridLength) {
   return hit === gridLength?true:false
  }
}
const carrier = new Ship(5);
export { carrier };
