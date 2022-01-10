import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  ScrollView,
  StatusBar,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const whiteNoiseData = [
  {
    title: 'White Noise',
    data: [
      'Waves',
      'Fans',
      'Air Conditioners',
      'Purring',
      'Fireplaces',
      'Radiators',
    ],
  },
];

const brownNoiseData = [
  {
    title: 'Brown Noise',
    data: ['Thunderstorms', 'Waterfalls', 'Applause', 'Roaring'],
  },
];

const pinkNoiseData = [
  {
    title: 'Pink Noise',
    data: [
      'Rainfall',
      'Rustling Leaves',
      'Streams',
      'Wind',
      'Nature Sounds',
      'Heartbeats',
    ],
  },
];

const blackNoiseData = [
  {
    title: 'Black Noise',
    data: ['Silence'],
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const backgroundImage = require('../assets/backgroundImages/purpleSmokeSurroundingPerson.png');

const MainMenu = ({ navigation }) => (
  <ImageBackground source={backgroundImage} style={styles.image}>
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.header}>Available Sounds</Text>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.text}
            onPress={() => navigation.navigate('White Noise')}
          >
            🤍&nbsp;White Noise&nbsp;🤍
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.text}
            onPress={() => navigation.navigate('Brown Noise')}
          >
            🤎&nbsp;Brown Noise&nbsp;🤎
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.text}
            onPress={() => navigation.navigate('Pink Noise')}
          >
            💖&nbsp;Pink Noise&nbsp;💖
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.text}
            onPress={() => navigation.navigate('Black Noise')}
          >
            🖤&nbsp;Black Noise&nbsp;🖤
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.text}
            onPress={() => navigation.navigate('Baby Jams')}
          >
            👼🏽&nbsp;Baby Jams&nbsp;👼🏽
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.text}
            onPress={() => navigation.navigate('Classical Jams')}
          >
            🎹&nbsp;&nbsp;Classical&nbsp;&nbsp;🎹
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.text}
            onPress={() => navigation.navigate('Jazz Jams')}
          >
            🎷&nbsp;Jazz&nbsp;&nbsp;🎷
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  </ImageBackground>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    flex: 1,
    marginVertical: 8,
  },
  header: {
    color: 'yellow',
    fontSize: 40,
    textAlign: 'justify',
    textShadowColor: 'blue',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 50,
    paddingBottom: 40,
    // alignItems: 'center',
    // justifyContent: 'center',
    // alignContent: 'center',
    alignSelf: 'center',
  },
  text: {
    color: 'yellow',
    fontSize: 32,
    textAlign: 'justify',
    textShadowColor: 'blue',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 50,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 10,
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default MainMenu;
