import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()
const MainPage = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      {/* <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Order"
        component={Order}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Akunt"
        component={Akunt}
        options={{headerShown: false}}
      /> */}
    </Tab.Navigator>
  );
};
const Router = () => {
    return (
      <NavigationContainer>
        {/* <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MainPage"
            component={MainPage}
            options={{headerShown: false}}
          />
        </Stack.Navigator> */}
      </NavigationContainer>
    );
}
export default Router