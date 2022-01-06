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

export default function BrownNoise({ navigation }) {
  return (
    <ImageBackground
      source={require('../../assets/backgroundImages/purpleGlobe.png')}
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
              onPress={() => navigation.navigate('Thunderstorm')}
            >
              <Text style={styles.text}>Thunderstorm</Text>
              <Image
                style={styles.imagestyle}
                source={require('../../assets/backgroundImages/purpleLightning.png')}
              />
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Waterfall')}
            >
              <Text style={styles.text}>Waterfall</Text>
              <Image
                style={styles.imagestyle}
                source={require('../../assets/backgroundImages/purpleWaterfall.png')}
              />
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Applause')}
            >
              <Text style={styles.text}>Applause</Text>
              <Image
                style={styles.imagestyle}
                source={require('../../assets/backgroundImages/purpleChalkSmoke.png')}
              />
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Roaring')}
            >
              <Text style={styles.text}>Roaring</Text>
              <Image
                style={styles.imagestyle}
                source={require('../../assets/backgroundImages/purpleLion.png')}
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
