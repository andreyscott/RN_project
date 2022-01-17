import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import AppNavigation from './AppNavigation/TabNavigator';

export type RootStackParamList = {
  Home: undefined;
  AppNavigation: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function App() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AppNavigation"
        component={AppNavigation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default App;