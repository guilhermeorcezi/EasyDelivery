import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from '../pages/Landing';

const App = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#312e38' },
      }}
      initialRouteName="Landing"
    >
      <App.Screen name="Landing" component={Landing} />
    </App.Navigator>
  );
};

export default Routes;
