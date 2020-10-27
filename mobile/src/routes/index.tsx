import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from '../pages/Landing';
import SignIn from '../pages/SignIn';

const App = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#312e38' },
      }}
      initialRouteName="SignIn"
    >
      <App.Screen name="Landing" component={Landing} />
      <App.Screen name="SignIn" component={SignIn} />
    </App.Navigator>
  );
};

export default Routes;
