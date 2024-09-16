import { all } from "redux-saga/effects";
import rootHotelsSaga from "./reducers/hotelsSaga";

export default function* rootSaga() {
  yield all([rootHotelsSaga()]);
}
