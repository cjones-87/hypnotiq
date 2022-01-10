import BlackNoise from '../BlackNoise/BlackNoise';
import BlackNoiseFunFacts from '../BlackNoise/BlackNoiseFunFacts';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function TabStack() {
  return (
    <Tab.Navigator
      initialRouteName="Black Noise"
      screenOptions={{
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#F8F8F8',
        tabBarLabelStyle: {
          textAlign: 'center',
        },
        tabBarIndicatorStyle: {
          borderBottomColor: '#87B56A',
          borderBottomWidth: 2,
        },
        tabBarStyle: {
          backgroundColor: '#633689',
        },
      }}
    >
      <Tab.Screen
        name="BlackNoise"
        component={BlackNoise}
        options={{
          tabBarLabel: 'Sound Playlist',
        }}
      />
      <Tab.Screen
        name="Fun Facts"
        component={BlackNoiseFunFacts}
        options={{
          tabBarLabel: 'Fun Facts',
        }}
      />
    </Tab.Navigator>
  );
}
