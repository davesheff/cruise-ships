/* globals window */
(function exportShip() {
  function Ship(itinerary) {
    this.itinerary = itinerary;
    this.currentPort = itinerary.ports[0];
    this.currentPort.addShip(this);
  }

  Ship.prototype = {
    setSail() {
      /* const chanceOfStorm = Math.random();
      if (chanceOfStorm > 0.4) {
        throw new Error('Cannot set sail. Weather too stormy');
      } */
      this.currentPort.removeShip(this);
      this.currentPort = false;
    },

    dock() {
      const itinerary = this.itinerary;
      const previousPortIndex = itinerary.ports.indexOf(this.currentPort);
      this.currentPort = itinerary.ports[previousPortIndex + 1];
      this.currentPort.addShip(this);
    },
  };
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Ship;
  } else {
    window.Ship = Ship;
  }
}());
