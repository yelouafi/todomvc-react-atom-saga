
import TodoConstants from '../constants/TodoConstants';
import { Event } from 'atom-react';

module.exports = {

  start(initialState) {
    return new Event(TodoConstants.TODO_START,{
      initialState: initialState
    });
  },

  create(text) {
    return new Event(TodoConstants.TODO_CREATE,{
      text: text
    });
  },

  updateText(id, text) {
    return new Event(TodoConstants.TODO_UPDATE_TEXT,{
      id: id,
      text: text
    });
  },

  toggleComplete(todo) {
    var id = todo.id;
    if (todo.completed) {
      return new Event(TodoConstants.TODO_UNDO_COMPLETE,{
        id: id
      });
    }
    else {
      return new Event(TodoConstants.TODO_COMPLETE,{
        id: id
      });
    }
  },

  toggleCompleteAll() {
    return new Event(TodoConstants.TODO_TOGGLE_COMPLETE_ALL,undefined);
  },

  destroy(id) {
    return new Event(TodoConstants.TODO_DESTROY,{
      id: id
    });
  },

  destroyCompleted() {
    return new Event(TodoConstants.TODO_DESTROY_COMPLETED,undefined);
  },

  showCongratulation() {
    return new Event(TodoConstants.SHOW_CONGRATULATION, undefined);
  },

  hideCongratulation() {
    return new Event(TodoConstants.HIDE_CONGRATULATION, undefined);
  }
};
