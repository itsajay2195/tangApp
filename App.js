import React, {useEffect} from 'react';
import {PermissionsAndroid} from 'react-native';
import RootNavigation from './src/navigation';
import {ContactContextProvider} from './src/context/ContactContext';

const App = () => {
  return (
    <ContactContextProvider>
      <RootNavigation />
    </ContactContextProvider>
  );
};

export default App;
