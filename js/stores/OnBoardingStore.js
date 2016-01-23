
var AtomReact = require("atom-react");

var TodoConstants = require('../constants/TodoConstants');


module.exports = AtomReact.newStore("onBoardingStore", {

  handleEvent: function (event) {

    switch (event.name) {
      case TodoConstants.SHOW_CONGRATULATION:
        this.cursor.set(true);
        break;

      case TodoConstants.HIDE_CONGRATULATION:
        this.cursor.set(false);
        break;

      default:
      // no op
    }
  }
});
