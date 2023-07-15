/**
 * My React Native Template
 * 
 */
import React, {FC} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store,persistor} from './src/store'
//Screens
import { RootScreens } from './src/screens';

const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <RootScreens/>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
