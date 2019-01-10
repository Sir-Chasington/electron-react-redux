import { combineReducers } from 'redux';

// import userReducer from './user/userReducer';
import darkTheme from './reducers/darkThemeReducer';

const reducer = combineReducers({
    darkTheme,
});

export default reducer;
