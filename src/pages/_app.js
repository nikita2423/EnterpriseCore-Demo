import { Provider } from 'react-redux';

import store from '../app/store';

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
        <Component
          {...pageProps}
          style={{ height: '100%' }}
        />
    </Provider>
  );
}