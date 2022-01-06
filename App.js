import React from 'react';
import WelcomeScreen from './screens/WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainMenu from './screens/MainMenu';
import WhiteNoise from './screens/WhiteNoise/WhiteNoise';
import Waves from './screens/WhiteNoise/Waves';
import Fan from './screens/WhiteNoise/Fan';
import AC from './screens/WhiteNoise/AC';
import Purring from './screens/WhiteNoise/Purring';
import Fireplace from './screens/WhiteNoise/Fireplace';
import Radiator from './screens/WhiteNoise/Radiator';

import BrownNoise from './screens/BrownNoise/BrownNoise';
import Thunderstorm from './screens/BrownNoise/Thunderstorm';
import Waterfall from './screens/BrownNoise/Waterfall';
import Applause from './screens/BrownNoise/Applause';
import Roaring from './screens/BrownNoise/Roaring';

import PinkNoise from './screens/PinkNoise/PinkNoise';
import Rainfall from './screens/PinkNoise/Rainfall';
import Leaves from './screens/PinkNoise/Leaves';
import Streams from './screens/PinkNoise/Streams';
import Wind from './screens/PinkNoise/Wind';
import Nature from './screens/PinkNoise/Nature';
import Heartbeat from './screens/PinkNoise/Heartbeat';

import BlackNoise from './screens/BlackNoise/BlackNoise';
import Silence from './screens/BlackNoise/Silence';

const Stack = createNativeStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerTitleAlign: 'center' }}
          initialRouteName="Welcome User!"
        >
          <Stack.Screen name="Welcome User!" component={WelcomeScreen} />
          <Stack.Screen name="Main Menu" component={MainMenu} />

          <Stack.Screen name="White Noise" component={WhiteNoise} />
          <Stack.Screen name="Waves" component={Waves} />
          <Stack.Screen name="Fan" component={Fan} />
          <Stack.Screen name="AC" component={AC} />
          <Stack.Screen name="Pussycat" component={Purring} />
          <Stack.Screen name="Fireplace" component={Fireplace} />
          <Stack.Screen name="Radiator" component={Radiator} />

          <Stack.Screen name="Brown Noise" component={BrownNoise} />
          <Stack.Screen name="Thunderstorm" component={Thunderstorm} />
          <Stack.Screen name="Waterfall" component={Waterfall} />
          <Stack.Screen name="Applause" component={Applause} />
          <Stack.Screen name="Roaring" component={Roaring} />

          <Stack.Screen name="Pink Noise" component={PinkNoise} />
          <Stack.Screen name="Rainfall" component={Rainfall} />
          <Stack.Screen name="Leaves" component={Leaves} />
          <Stack.Screen name="Streams" component={Streams} />
          <Stack.Screen name="Wind" component={Wind} />
          <Stack.Screen name="Nature" component={Nature} />
          <Stack.Screen name="Heartbeat" component={Heartbeat} />

          <Stack.Screen name="Black Noise" component={BlackNoise} />
          <Stack.Screen name="Black" component={Silence} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
