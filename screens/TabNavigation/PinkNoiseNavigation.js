import PinkNoise from '../PinkNoise/PinkNoise';
import PinkNoiseFunFacts from '../PinkNoise/PinkNoiseFunFacts';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function TabStack() {
  return (
    <Tab.Navigator
      initialRouteName="Pink Noise"
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
        name="PinkNoise"
        component={PinkNoise}
        options={{
          tabBarLabel: 'Sound Playlist',
        }}
      />
      <Tab.Screen
        name="Fun Facts"
        component={PinkNoiseFunFacts}
        options={{
          tabBarLabel: 'Fun Facts',
        }}
      />
    </Tab.Navigator>
  );
}
