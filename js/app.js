import "babel-polyfill";

import React from 'react';
import AtomReact from "atom-react";
import _ from "lodash";

import createContextWithSagas from './createContextWithSagas'

import TodoApp from './components/TodoApp.react';

import TodoStore from './stores/TodoStore';
import onBoardingStore from './stores/onBoardingStore';

import TodoActions from './events/TodoActions';
import OnBoardingSaga from './sagas/OnBoardingSaga';

const bindActions = actions => publish => {
  const boundActions = {}
  Object.keys(actions).forEach(key => {
    const pureAction = actions[key];
    boundActions[key] = (...args) => publish(pureAction(...args))
  });
  return boundActions
}

let context = createContextWithSagas();

context.setMountConfig(TodoApp, document.getElementById('todoapp'));
//context.debugMode();
context.setActions(bindActions(TodoActions));
context.addStore(TodoStore);
context.addStore(onBoardingStore);
context.addSaga(OnBoardingSaga);

context.actions.start();
