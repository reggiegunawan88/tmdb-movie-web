// list of reducers for each features
import { combineReducers } from 'redux';

/* import slicers for each features */
import HomeSlicers from '@/store/slices/Home';

// combine all reducers
const combinedReducer = combineReducers({
  home: HomeSlicers,
});

export default combinedReducer;
