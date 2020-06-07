import React from 'react';
import Cart from './Screen/Cart';
import Home from './Screen/Home';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
const Stack = createStackNavigator()
class StackApp extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Cart' component={Cart} />

        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
export default StackApp;