import ClassicalJams from '../ClassicalJams/ClassicalJams';
import ClassicalFunFacts from '../ClassicalJams/ClassicalFunFacts';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function TabStack() {
  return (
    <Tab.Navigator
      initialRouteName="Classical Jams"
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
        name="ClassicalJams"
        component={ClassicalJams}
        options={{
          tabBarLabel: 'Sound Playlist',
        }}
      />
      <Tab.Screen
        name="Fun Facts"
        component={ClassicalFunFacts}
        options={{
          tabBarLabel: 'Fun Facts',
        }}
      />
    </Tab.Navigator>
  );
}
