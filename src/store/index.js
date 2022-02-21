import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";

import rootReducer from "./modules/rootReducer";
import  rootSaga  from "./modules/rootSaga";

const sagaMiddleWare = createSagaMiddleware();

const enhancer = applyMiddleware(sagaMiddleWare)

const store = createStore( rootReducer, enhancer );

sagaMiddleWare.run(rootSaga);

export { store };