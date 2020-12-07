import { combineReducers } from 'redux';
import SideBar from './SideBar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import MovieList from './MovieList';
import MovieComment from './MovieComment';

const reducer = combineReducers({
	SideBar,
	SignIn,
	SignUp,
	MovieList,
	MovieComment
});

export default reducer;
