import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NotLoggedInStackNavigator,
  LoggedInStackNavigator,
} from './StackContainer';
import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import ContactScreen from './screens/ContactScreen/ContactScreen';
import ContactDetails from './screens/ContactDetailsScreen/ContactDetails';
const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 20}
          style={{flex: 1}}>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{headerShown: false}}
            />

            <Stack.Screen
              name="Contacts"
              component={ContactScreen}
              options={{headerShown: false}}
            />

            <Stack.Screen
              name="ContactDetails"
              component={ContactDetails}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </KeyboardAvoidingView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default RootNavigation;
