import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import CategoriesScreen from '../../screens/categories/Categories';
import CategoryListScreen from '../../screens/categories/CategoryList';
import ProductDetailScreen from '../../screens/categories/ProductDetails';
import colors from '../../assets/Constant/colors';

export type StackParamList = {
  CategoriesScreen: undefined;
  CategoryListScreen: undefined;
  ProductDetailScreen: undefined;
};

const Stack = createStackNavigator<StackParamList>();

function App() {
  return (
    <Stack.Navigator initialRouteName="CategoriesScreen">
      <Stack.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
        options={{
          headerTitle: '',
          headerStyle: {backgroundColor: colors.primary},
        }}
      />
      <Stack.Screen
        name="CategoryListScreen"
        component={CategoryListScreen}
        options={{
          headerTitle: '',
          headerStyle: {backgroundColor: 'transparent'},
        }}
      />
      <Stack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default App;
