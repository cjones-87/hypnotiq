import React from 'react';
import {
  Image,
  StyleSheet,
  ScrollView,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

export default function JazzJams({ navigation }) {
  return (
    <ImageBackground
      source={require('../../assets/backgroundImages/purpleLongHairJamming.png')}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.text}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('NYC Jazz')}
            >
              <Text style={styles.text}>NYC Jazz</Text>
              <Image
                style={styles.imagestyle}
                source={require('../../assets/backgroundImages/purpleBar.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Slow Jazz')}
            >
              <Text style={styles.text}>Slow Jazz</Text>
              <Image
                style={styles.imagestyle}
                source={require('../../assets/backgroundImages/purpleBassGuitar.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Tokyo Cafe Jazz')}
            >
              <Text style={styles.text}>Tokyo Cafe Jazz</Text>
              <Image
                style={styles.imagestyle}
                source={require('../../assets/backgroundImages/purpleJellyfish.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Smooth Jazz')}
            >
              <Text style={styles.text}>Smooth Jazz</Text>
              <Image
                style={styles.imagestyle}
                source={require('../../assets/backgroundImages/purpleSaxPlayer.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Relaxing Jazz')}
            >
              <Text style={styles.text}>Relaxing Jazz</Text>
              <Image
                style={styles.imagestyle}
                source={require('../../assets/backgroundImages/purpleSaxes.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Sleepy Jazz')}
            >
              <Text style={styles.text}>Sleepy Jazz</Text>
              <Image
                style={styles.imagestyle}
                source={require('../../assets/backgroundImages/purpleInstruments.png')}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    flex: 1,
    fontSize: 24,
    alignItems: 'center',
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 10,
  },
  imagestyle: {
    height: 150,
    width: 150,
  },
  backgroundImage: {
    flex: 1,
  },
});
