import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchHotelsRequest,
  fetchHotelsSuccess,
  fetchHotelsFailure,
} from './hotelsReducer';
import {
  fetchDestinationsRequest,
  fetchDestinationsSuccess,
  fetchDestinationsFailure,
} from './destinationsReducer';
 
const API_BASE_URL = 'https://db-roan-nine.vercel.app/api';

function* fetchHotelsSaga(action) {
  try {
    const response = yield call(axios.get, `${API_BASE_URL}/hotels`, {
      params: { city: action.payload },
    });
    const hotels = response.data.map(hotel => ({
      name: hotel.name,
      address: hotel.address,
      code: hotel.country_code,
      city: hotel.city,
      hotel_rating: hotel.hotel_rating,
      phone_number: hotel.phone_number,
      image: hotel.image,
    }));
    yield put(fetchHotelsSuccess(hotels));
  } catch (error) {
    yield put(fetchHotelsFailure(error.message));
  }
}

function* fetchDestinationSaga(action) {
  try {
    const response = yield call(axios.get, `${API_BASE_URL}/destination`, {
      params: action.payload,
    });

    const destinations = response.data.map(destination => ({
      id: destination.id,
      label: destination.label,
    }));

    yield put(fetchDestinationsSuccess(destinations));
  } catch (error) {
    yield put(fetchDestinationsFailure(error.message));
  }
}


 
export default function* rootHotelsSaga() {
  yield takeLatest(fetchHotelsRequest.type, fetchHotelsSaga);
  yield takeLatest(fetchDestinationsRequest.type, fetchDestinationSaga);
}

