

//////////////////////////////////////////////////////
var React = require('react');
var ReactDOM = require('react-dom');
var AtomReact = require("atom-react");
var _ = require("lodash");
//////////////////////////////////////////////////////


var CongratulationMessage = AtomReact.createPureClass("CongratulationMessage",{

  propTypes: {
    showCongratulation: React.PropTypes.bool
  },

  /**
   * @return {object}
   */
  render: function() {

    const style = {
      position: 'fixed',
      margin: '1em',
      background: '#ffffff',
      top: 0,
      left: 0
    };

    const buttonStyle = {
      cursor: 'pointer',
      fontWeight: 'bold',
      color: 'blue'
    }

    if (this.props.showCongratulation) {
      return (
          <div style={style}>
            Congratulation! You just created 3 Todos&nbsp;
            <a
              style={buttonStyle}
              onClick={this._onDismiss}>Dismiss!</a>
          </div>
      );
    } else {
      return null
    }
  },

  _onDismiss: function() {
    this.actions.hideCongratulation();
  }

});

module.exports = CongratulationMessage;
