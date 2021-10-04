import { configureStore } from '@reduxjs/toolkit';

import { CryptoApi } from '../Services/CryptoApi';

export default configureStore({
  reducer: {
    [CryptoApi.reducerPath]: CryptoApi.reducer
  },
});