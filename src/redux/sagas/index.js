import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import dataReportingSaga from './dataReportingSaga';
import contactsSaga from './contacts';
import organizationsSaga from './organizations';
import newOrganizationSaga from './newOrganizationSaga';
import eventSaga from './eventSaga';
import countiesSaga from './counties';
import getBookSaga from './bookCountData';
import editEventSaga from './editEventSaga';


// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    dataReportingSaga(),
    contactsSaga(),
    organizationsSaga(),
    newOrganizationSaga(),
    eventSaga(),
    countiesSaga(),
    getBookSaga(),
    editEventSaga()
  ]);
}
