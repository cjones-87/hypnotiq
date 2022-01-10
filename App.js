// import 'react-native-gesture-handler';

import React from 'react';
import WelcomeScreen from './screens/WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainMenu from './screens/MainMenu';

import WhiteNoiseNavigation from './screens/TabNavigation/WhiteNoiseNavigation';
import Waves from './screens/WhiteNoise/Waves';
import Fan from './screens/WhiteNoise/Fan';
import AC from './screens/WhiteNoise/AC';
import Purring from './screens/WhiteNoise/Purring';
import Fireplace from './screens/WhiteNoise/Fireplace';
import Radiator from './screens/WhiteNoise/Radiator';

import BrownNoiseNavigation from './screens/TabNavigation/BrownNoiseNavigation';
import Thunderstorm from './screens/BrownNoise/Thunderstorm';
import Waterfall from './screens/BrownNoise/Waterfall';
import Applause from './screens/BrownNoise/Applause';
import Roaring from './screens/BrownNoise/Roaring';

import PinkNoiseNavigation from './screens/TabNavigation/PinkNoiseNavigation';
import Rainfall from './screens/PinkNoise/Rainfall';
import Leaves from './screens/PinkNoise/Leaves';
import Streams from './screens/PinkNoise/Streams';
import Wind from './screens/PinkNoise/Wind';
import Nature from './screens/PinkNoise/Nature';
import Heartbeat from './screens/PinkNoise/Heartbeat';

import BlackNoiseNavigation from './screens/TabNavigation/BlackNoiseNavigation';
import Silence from './screens/BlackNoise/Silence';

import BabyJamsNavigation from './screens/TabNavigation/BabyJamsNavigation';
import BabyMozart from './screens/BabyJams/BabyMozart';
import GospelLullabies from './screens/BabyJams/GospelLullabies';
import BrahmsClassical from './screens/BabyJams/BrahmsClassical';
import MegaLullaby from './screens/BabyJams/MegaLullaby';
import HushLittleBaby from './screens/BabyJams/HushLittleBaby';
import RockabyeBaby from './screens/BabyJams/RockabyeBaby';
import StarLightStarBright from './screens/BabyJams/StarLightStarBright';
import SuperSimpleSongs from './screens/BabyJams/SuperSimpleSongs';
import TenHourLullaby from './screens/BabyJams/TenHourLullaby';
import BrahmsSoothing from './screens/BabyJams/BrahmsSoothing';
import JazzLullabies from './screens/BabyJams/JazzLullabies';
import DisneyLullabies from './screens/BabyJams/DisneyLullabies';

import ClassicalNavigation from './screens/TabNavigation/ClassicalNavigation';
import FurElise from './screens/ClassicalJams/FurElise';
import Einaudi from './screens/ClassicalJams/EinaudiMix';
import AirGString from './screens/ClassicalJams/AirGString';
import PeerGynt from './screens/ClassicalJams/PeerGynt';
import Gymnopedie from './screens/ClassicalJams/Gymnopedie';
import RomeoJuliet from './screens/ClassicalJams/RomeoJuliet';
import ClairDeLune from './screens/ClassicalJams/ClairDeLune';
import SpiegelImSpiegel from './screens/ClassicalJams/SpiegelImSpiegel';
import Wiegenlied from './screens/ClassicalJams/Wiegenlied';
import BumblebeeFlight from './screens/ClassicalJams/BumblebeeFlight';

import JazzNavigation from './screens/TabNavigation/JazzNavigation';
import NYCJazz from './screens/JazzJams/NYCJazz';
import SlowJazz from './screens/JazzJams/SlowJazz';
import TokyoCafeJazz from './screens/JazzJams/TokyoCafeJazz';
import SmoothJazz from './screens/JazzJams/SmoothJazz';
import RelaxingJazz from './screens/JazzJams/RelaxingJazz';
import SleepyJazz from './screens/JazzJams/SleepyJazz';

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

          <Stack.Screen name="White Noise" component={WhiteNoiseNavigation} />
          <Stack.Screen name="Waves" component={Waves} />
          <Stack.Screen name="Fan" component={Fan} />
          <Stack.Screen name="AC" component={AC} />
          <Stack.Screen name="Pussycat" component={Purring} />
          <Stack.Screen name="Fireplace" component={Fireplace} />
          <Stack.Screen name="Radiator" component={Radiator} />

          <Stack.Screen name="Brown Noise" component={BrownNoiseNavigation} />
          <Stack.Screen name="Thunderstorm" component={Thunderstorm} />
          <Stack.Screen name="Waterfall" component={Waterfall} />
          <Stack.Screen name="Applause" component={Applause} />
          <Stack.Screen name="Roaring" component={Roaring} />

          <Stack.Screen name="Pink Noise" component={PinkNoiseNavigation} />
          <Stack.Screen name="Rainfall" component={Rainfall} />
          <Stack.Screen name="Leaves" component={Leaves} />
          <Stack.Screen name="Streams" component={Streams} />
          <Stack.Screen name="Wind" component={Wind} />
          <Stack.Screen name="Nature" component={Nature} />
          <Stack.Screen name="Heartbeat" component={Heartbeat} />

          <Stack.Screen name="Black Noise" component={BlackNoiseNavigation} />
          <Stack.Screen name="Black" component={Silence} />

          <Stack.Screen name="Baby Jams" component={BabyJamsNavigation} />
          <Stack.Screen name="Baby Mozart" component={BabyMozart} />
          <Stack.Screen name="Gospel Lullabies" component={GospelLullabies} />
          <Stack.Screen name="Brahms Classical" component={BrahmsClassical} />
          <Stack.Screen name="Mega Lullaby" component={MegaLullaby} />
          <Stack.Screen name="Hush Little Baby" component={HushLittleBaby} />
          <Stack.Screen name="Rockabye Baby" component={RockabyeBaby} />
          <Stack.Screen
            name="Star Light Star Bright"
            component={StarLightStarBright}
          />
          <Stack.Screen
            name="Super Simple Songs"
            component={SuperSimpleSongs}
          />
          <Stack.Screen name="10 Hour Lullaby" component={TenHourLullaby} />
          <Stack.Screen name="Brahms Soothing" component={BrahmsSoothing} />
          <Stack.Screen name="Jazz Lullabies" component={JazzLullabies} />
          <Stack.Screen name="Disney Lullabies" component={DisneyLullabies} />

          <Stack.Screen name="Classical Jams" component={ClassicalNavigation} />
          <Stack.Screen name="Fur Elise" component={FurElise} />
          <Stack.Screen name="Einaudi" component={Einaudi} />
          <Stack.Screen name="Air G String" component={AirGString} />
          <Stack.Screen name="Peer Gynt" component={PeerGynt} />
          <Stack.Screen name="Gymnopedie" component={Gymnopedie} />
          <Stack.Screen name="Romeo & Juliet" component={RomeoJuliet} />
          <Stack.Screen name="Clair De Lune" component={ClairDeLune} />
          <Stack.Screen
            name="Spiegel Im Spiegel"
            component={SpiegelImSpiegel}
          />
          <Stack.Screen name="Wiengenlied" component={Wiegenlied} />
          <Stack.Screen
            name="Flight Of The Bumblebee"
            component={BumblebeeFlight}
          />

          <Stack.Screen name="Jazz Jams" component={JazzNavigation} />
          <Stack.Screen name="NYC Jazz" component={NYCJazz} />
          <Stack.Screen name="Slow Jazz" component={SlowJazz} />
          <Stack.Screen name="Tokyo Cafe Jazz" component={TokyoCafeJazz} />
          <Stack.Screen name="Smooth Jazz" component={SmoothJazz} />
          <Stack.Screen name="Relaxing Jazz" component={RelaxingJazz} />
          <Stack.Screen name="Sleepy Jazz" component={SleepyJazz} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
