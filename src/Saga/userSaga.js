import userConstant from '../Constants/userAction';
import { put } from 'redux-saga/effects'
// import userService from  '../service/userService';

export function* loginUser (action) {
  try {
    const { data } = action;
    console.log("data>>>>>", data);
    // const data = yield call(userService)
    yield put({ type: userConstant.LOGIN_USER_SUCCESS, data })
  } catch (e) {
    yield put({ type: userConstant.LOGIN_USER_ERROR, e })
  }
}