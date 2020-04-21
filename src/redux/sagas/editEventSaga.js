import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* editEvent(action) {
    try {
        yield axios.put('/api/events/editEvent', action.payload)
    } catch (err) {
        console.log('error in edit events:', err)
    }
}

function* loginSaga() {
    yield takeLatest('EDIT_EVENT', editEvent);
}
  
export default loginSaga;