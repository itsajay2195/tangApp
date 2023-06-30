import React from 'react';
import RootNavigation from './src/navigation';
import {ContactContextProvider} from './src/context/ContactContext';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const App = () => {
  return (
    <ContactContextProvider>
      <RootNavigation />
    </ContactContextProvider>
  );
};

export default App;
