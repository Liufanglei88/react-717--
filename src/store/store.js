import { createStore, applyMiddleware } from "redux";
import reducers from "./reducer";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import sagas from "./sagas";
let sagaMiddleware = createSagaMiddleware();
let store = createStore(
  reducers,
  applyMiddleware(logger),
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(sagas);
export default store;
