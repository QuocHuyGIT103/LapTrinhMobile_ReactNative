import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchJobsRequest,
  fetchJobsSuccess,
  fetchJobsFailure,
  addJobRequest,
  addJobSuccess,
  addJobFailure,
  deleteJobRequest,
  deleteJobSuccess,
  deleteJobFailure,
} from './jobSlice';

const URL ='https://66ff35612b9aac9c997e8502.mockapi.io/job';

function* fetchJobs() {
  try {
    const response = yield call(axios.get, URL);
    yield put(fetchJobsSuccess(response.data));
  } catch (error) {
    yield put(fetchJobsFailure(error.message));
  }
}

function* addJob(action) {
  try {
    const response = yield call(axios.post, URL, { title: action.payload });
    yield put(addJobSuccess(response.data));
  } catch (error) {
    yield put(addJobFailure(error.message));
  }
}

function* deleteJob(action) {
  try {
    yield call(axios.delete, `${URL}/${action.payload}`);
    yield put(deleteJobSuccess(action.payload));
  } catch (error) {
    yield put(deleteJobFailure(error.message));
  }
}

export function* jobSaga() {
  yield takeLatest(fetchJobsRequest.type, fetchJobs);
  yield takeLatest(addJobRequest.type, addJob);
  yield takeLatest(deleteJobRequest.type, deleteJob);
}
