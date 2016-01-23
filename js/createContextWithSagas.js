
import AtomReact from "atom-react";
import { runSaga } from 'redux-saga'

const noop = () => {}

export default function createContextWithSagas(sagaMonitor = noop) {
  let context = AtomReact.newContext();

  const subscribe = listener => {
    const callback = event => {
      listener({...event, type: event.name})
    };
    context.addEventListener(callback);
    return () => context.removeEventListener(callback);
  };

  const dispatch = events => context.publishEvents(events);

  context.addSaga = saga => {
    runSaga(saga(), {subscribe, dispatch}, sagaMonitor)
  }

  return context;
}
