import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Creditcard from '../../screens/checkout/CreditCard'
import Checkout from '../../screens/checkout/Checkout';
import colors from'../../assets/Constant/colors';

export type StackParamList = {
  CheckOutScreen: undefined;
  CreditCard: undefined;
};

const Stack = createStackNavigator<StackParamList>();

function App() {
  return (
    <Stack.Navigator initialRouteName="CheckOutScreen">
      <Stack.Screen
        name="CheckOutScreen"
        component={Checkout}
        options={{headerTitle: 'Checkout', headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="CreditCard"
        component={Creditcard}
        options={{
          headerTitle: '',
          headerStyle: {backgroundColor: colors.primary},
        }}
      />
    </Stack.Navigator>
  );
}

export default App;
