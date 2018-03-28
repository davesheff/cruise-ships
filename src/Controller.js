/* eslint-env browser */
/* globals window */
(function exportShip() {
  function Controller() {
    this.initialiseSea();
  }

  Controller.prototype = {
    initialiseSea() {
      const backgrounds = [
        './images/water0.png',
        './images/water1.png',
      ];
      let backgroundIndex = 0;
      setInterval(() => {
        const viewport = document.querySelector('#viewport');
        viewport.style.backgroundImage = `url('${backgrounds[backgroundIndex]}')`;
        backgroundIndex += 1;
        if (backgroundIndex === backgrounds.length) {
          backgroundIndex = 0;
        }
      }, 1000);
    },

    renderPorts(ports) {
      const portsElement = document.querySelector('#ports');
      portsElement.style.width = 0;
      ports.forEach(function(port) {
      })
    },

  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Controller;
  } else {
    window.Ship = Controller;
  }
}());

