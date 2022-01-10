import BrownNoise from '../BrownNoise/BrownNoise';
import BrownNoiseFunFacts from '../BrownNoise/BrownNoiseFunFacts';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function TabStack() {
  return (
    <Tab.Navigator
      initialRouteName="Brown Noise"
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
        name="BrownNoise"
        component={BrownNoise}
        options={{
          tabBarLabel: 'Sound Playlist',
        }}
      />
      <Tab.Screen
        name="Fun Facts"
        component={BrownNoiseFunFacts}
        options={{
          tabBarLabel: 'Fun Facts',
        }}
      />
    </Tab.Navigator>
  );
}
