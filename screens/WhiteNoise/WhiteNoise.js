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

export default function WhiteNoise({ navigation }) {
  return (
    <ImageBackground
      source={require('../../assets/backgroundImages/purpleFlowersBlackBackground.png')}
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
              onPress={() => navigation.navigate('Waves')}
            >
              <Text style={styles.text}>Ocean Waves</Text>
              <Image
                style={styles.imagestyle}
                source={require('../../assets/backgroundImages/purpleWaves.png')}
              />
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Fan')}
            >
              <Text style={styles.text}>Cooling Fan</Text>
              <Image
                style={styles.imagestyle}
                source={require('../../assets/backgroundImages/purpleFan.png')}
              />
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('AC')}
            >
              <Text style={styles.text}>Air Conditioner</Text>
              <Image
                style={styles.imagestyle}
                source={require('../../assets/backgroundImages/purpleAC.png')}
              />
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Pussycat')}
            >
              <Text style={styles.text}>Purring Kitties</Text>
              <Image
                style={styles.imagestyle}
                source={require('../../assets/backgroundImages/purpleCat.png')}
              />
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Fireplace')}
            >
              <Text style={styles.text}>Fireplace</Text>
              <Image
                style={styles.imagestyle}
                source={require('../../assets/backgroundImages/purpleFire.png')}
              />
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Radiator')}
            >
              <Text style={styles.text}>Radiator</Text>
              <Image
                style={styles.imagestyle}
                source={require('../../assets/backgroundImages/purpleRadiator.png')}
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
