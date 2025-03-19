class Ship {
  constructor(length) {
    this.length = length;
  }

  hit(attackCoordinates, shipCoordinates) {
    let hits = 0;
    if (attackCoordinates === shipCoordinates) {
      hits++;
    }
    return hits;
  }

  isSunk(length, hit) {
    if (hit === length) {
      return true;
    } else {
      false;
    }
  }
}

const carrier = new Ship(5);
module.exports = carrier;