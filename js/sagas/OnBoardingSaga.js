
import { take, put, call } from 'redux-saga'
import TodoConstants from '../constants/TodoConstants';
import { showCongratulation } from '../events/TodoActions'

export default function* OnBoardingSaga() {
  let count = 0
  for(let i = 0; i < 3; i++) {
    yield take(TodoConstants.TODO_CREATE);
  }

  yield put(showCongratulation());
}
