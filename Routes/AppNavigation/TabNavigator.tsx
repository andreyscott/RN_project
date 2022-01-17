import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntIcons from 'react-native-vector-icons/FontAwesome';

import CategoryScreen from './CategoryNavigator';
import Checkout from './CheckoutNavigator';
//import Profile from '../../Screens/Profile/ProfileScreen';
import colors from'../../assets/Constant/colors';

type RootStackParamList = {
  Category: undefined;
  Cart: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<RootStackParamList>();

const AppNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: `${colors.purple}`,
      inactiveTintColor: `${colors.grey}`,
      showLabel: false,
      keyboardHidesTabBar: true,
    }}>
    <Tab.Screen
      name="Category"
      component={CategoryScreen}
      options={{
        tabBarIcon: ({color, size}) => (
          <MaterialIcon name="dice-4" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Cart"
      component={Checkout}
      options={{
        tabBarIcon: ({color, size}) => (
          <MaterialIcon name="cart" color={color} size={size} />
        ),
      }}
    />
    {/* <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: ({color, size}) => (
          <AntIcons name="user" color={color} size={size} />
        ),
      }}
    /> */}
  </Tab.Navigator>
);

export default AppNavigator;
