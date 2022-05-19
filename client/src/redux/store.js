import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { usernameReducer } from './reducers/usernameReducer';
import { wheelsReducer } from './reducers/wheelsReducer';
import { vehicleTypesReducer } from './reducers/vehicleTypesReducer';
import { vehiclesReducer } from './reducers/vehiclesReducer';
import { slotsReducer } from './reducers/slotsReducer';
import { alertsReducer } from './reducers/alertsReducer';

const composeEnhancers = composeWithDevTools({});

const rootReducer = combineReducers({
    usernameReducer,
    wheelsReducer,
    vehicleTypesReducer,
    vehiclesReducer,
    slotsReducer,
    alertsReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store