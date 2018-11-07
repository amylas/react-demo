import { put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { initList } from './actionCreator'
import { INIT_LIST } from './actionTypes'

function* fetchList() {
    try {
        const res = yield axios.get('xxxx')
        console.log(res)
        const action = initList()
        yield put(action)
    } catch (e) {
       console.log('请求失败')
    }
 }

 function* mySaga () {
    yield takeEvery(INIT_LIST, fetchList)
 }

 export default mySaga