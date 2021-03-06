

//////////////////////////////////////////////////////
var React = require('react');
var ReactDOM = require('react-dom');
var AtomReact = require("atom-react");
var _ = require("lodash");
//////////////////////////////////////////////////////

var Footer = require('./Footer.react');
var Header = require('./Header.react');
var MainSection = require('./MainSection.react');
var CongratulationMessage = require('./CongratulationMessage.react');


var TodoApp = AtomReact.createPureClass("TodoApp",{

  propTypes: {
    appStateCursor: AtomReact.PropTypes.isCursor
  },

  render: function() {
    var todoStoreCursor = this.props.appStateCursor.follow("todoStore");
    var allTodos = todoStoreCursor.get().todoList;

    var onBoardingCursor = this.props.appStateCursor.follow("onBoardingStore");

    return (
        <div>
          <Header textInputCursor={todoStoreCursor.follow("textInput")}/>
          <MainSection todoListCursor={todoStoreCursor.follow("todoList")}/>
          <Footer allTodos={allTodos} />
          <CongratulationMessage
            showCongratulation={onBoardingCursor.getOrElse(false)}
          />
        </div>
    );
  }

});

module.exports = TodoApp;
