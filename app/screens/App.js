import React, {Suspense} from 'react';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './../redux/store';
const RootContainer = React.lazy(() => import('../navigation/AppNavigation'));

const App = () => {
  return (
    <Suspense fallback={<Text />}>
      <Provider store={store}>
        <RootContainer />
      </Provider>
    </Suspense>
  );
};

export default App;
