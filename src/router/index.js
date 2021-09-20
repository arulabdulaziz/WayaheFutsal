import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../pages/home';
import Field from '../pages/field';
import Akunt from '../pages/akunt';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
import BottomNavigator from '../components/bottom-navigator';
const MainPage = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Field"
        component={Field}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Akunt"
        component={Akunt}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainPage">
          {/* <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          /> */}
          <Stack.Screen
            name="MainPage"
            component={MainPage}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Router;
