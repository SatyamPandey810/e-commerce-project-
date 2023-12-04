import {configureStore} from '@reduxjs/toolkit';
import rootReducers from './reducer/index (1)';
const store = configureStore({
    reducer: rootReducers,

})

export default store;
