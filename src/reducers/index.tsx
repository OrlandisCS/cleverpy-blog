import { combineReducers } from 'redux';
import postsReducer from './reducer';
import authReducer from './authReducer';

export default combineReducers({
	posts: postsReducer,
	auth: authReducer,
});
