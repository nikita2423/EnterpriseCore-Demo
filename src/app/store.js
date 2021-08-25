import { configureStore } from '@reduxjs/toolkit';

import reducer from '../lib/reducers';

export default configureStore({
  reducer,
});