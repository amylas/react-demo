import { put, takeEvery } from 'redux-saga/effects'
import {  }

function* getTodoList(action) {
    try {
       const user = yield call(Api.fetchUser, action.payload.userId);
       yield put({type: "USER_FETCH_SUCCEEDED", user: user});
    } catch (e) {
       yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
 }