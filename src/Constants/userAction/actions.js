import constant from './index'

export function loginUser(data) {
  return {
    type: constant.LOGIN_USER,
    data
  }
}

export function loginUserSuccess(response) {
  return {
    type: constant.LOGIN_USER_SUCCESS,
    response
  }
}

export function loginUserError(error) {
  console.log(">>>>>::::::::>>>>>>>>>", error)
  return {
    type: constant.LOGIN_USER_ERROR,
    error
  }
}