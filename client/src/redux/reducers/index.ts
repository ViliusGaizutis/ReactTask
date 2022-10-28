import { combineReducers, Reducer, CombinedState, AnyAction } from 'redux';

// Types
import type { AuthState } from './auth';
import type { FeedbackState } from './feedback';
import type { LocationState } from './location';
import type { ThemeState } from './theme';

// Reducers
import authReducer from './auth';
import feedbackReducer from './feedback';
import locationReducer from './location';
import themeReducer from './theme';

const rootReducer: Reducer<
  CombinedState<{
    auth: AuthState;
    feedback: FeedbackState;
    location: LocationState;
    theme: ThemeState;
  }>,
  AnyAction
> = combineReducers({
  auth: authReducer,
  feedback: feedbackReducer,
  location: locationReducer,
  theme: themeReducer
});

export default rootReducer;
