import JazzJams from '../JazzJams/JazzJams';
import JazzJamsFunFacts from '../JazzJams/JazzFunFacts';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function TabStack() {
  return (
    <Tab.Navigator
      initialRouteName="Jazz Jams"
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
        name="JazzJams"
        component={JazzJams}
        options={{
          tabBarLabel: 'Sound Playlist',
        }}
      />
      <Tab.Screen
        name="Fun Facts"
        component={JazzJamsFunFacts}
        options={{
          tabBarLabel: 'Fun Facts',
        }}
      />
    </Tab.Navigator>
  );
}
