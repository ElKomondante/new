
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { watcherPost } from './action-creators/posts-action-creators';
import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { postsReducer } from './reducers';

const sagaMiddleware = createSagaMiddleware();
function* rootSaga(){
    yield all([
        watcherPost(),
    ])
}
const store = createStore(combineReducers({
    posts: postsReducer
}), applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export { store };