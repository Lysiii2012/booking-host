import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from "history";
import { hotelsReducer } from "./reducers/hotelsReducer";
import { destinationReducer } from "./reducers/destinationsReducer";
import rootSaga from "./rootSaga";

const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({
    history: createBrowserHistory(),
  });

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    router: routerReducer,
    hotels: hotelsReducer,
    destinations: destinationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware, routerMiddleware),
});

sagaMiddleware.run(rootSaga);

export const history = createReduxHistory(store);
export default store;
