import WhiteNoise from '../WhiteNoise/WhiteNoise';
import WhiteNoiseFunFacts from '../WhiteNoise/WhiteNoiseFunFacts';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function TabStack() {
  return (
    <Tab.Navigator
      initialRouteName="White Noise"
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
        name="WhiteNoise"
        component={WhiteNoise}
        options={{
          tabBarLabel: 'Sound Playlist',
          // tabBarIcon: <FontAwesome5 name="music" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Fun Facts"
        component={WhiteNoiseFunFacts}
        options={{
          tabBarLabel: 'Fun Facts',
        }}
      />
    </Tab.Navigator>
  );
}
