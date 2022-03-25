import React from 'react';
//Navigation imports
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//pages
import Details from '../pages/Details';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';

const Stack = createNativeStackNavigator();

const Routes: React.FC = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
              {/* <Stack.Screen
                name='Home'
                component={Home}
                /> */}
              <Stack.Screen
                name='Dashboard'
                component={Dashboard}
                />
                <Stack.Screen
                name='Details'
                component={Details}
                />
          </Stack.Navigator>

      </NavigationContainer>
  )
}

export default Routes;