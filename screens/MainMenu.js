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
      <SectionList
        sections={whiteNoiseData}
        stickySectionHeadersEnabled={false}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text
            onPress={() => navigation.navigate('White Noise')}
            style={styles.header}
          >
            {title}
          </Text>
        )}
      />
      <SectionList
        sections={brownNoiseData}
        stickySectionHeadersEnabled={false}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text
            onPress={() => navigation.navigate('Brown Noise')}
            style={styles.header}
          >
            {title}
          </Text>
        )}
      />
      <SectionList
        sections={pinkNoiseData}
        stickySectionHeadersEnabled={false}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text
            onPress={() => navigation.navigate('Pink Noise')}
            style={styles.header}
          >
            {title}
          </Text>
        )}
      />
      <SectionList
        sections={blackNoiseData}
        stickySectionHeadersEnabled={false}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text
            onPress={() => navigation.navigate('Black Noise')}
            style={styles.header}
          >
            {title}
          </Text>
        )}
      />
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
    flex: 1,
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  title: {
    flex: 1,
    fontSize: 24,
    color: 'dodgerblue',
    textAlign: 'center',
    textShadowColor: 'white',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default MainMenu;
