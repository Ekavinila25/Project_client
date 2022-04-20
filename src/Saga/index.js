import { takeEvery } from 'redux-saga/effects';
import constant from '../Constants/userAction';
import { loginUser } from './userSaga';

export default function* saga() { 
  yield takeEvery(constant.LOGIN_USER, loginUser);
}