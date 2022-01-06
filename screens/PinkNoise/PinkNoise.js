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

export default function PinkNoise({ navigation }) {
  return (
    <ImageBackground
      source={require('../../assets/backgroundImages/purpleSplash.png')}
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
              onPress={() => navigation.navigate('Rainfall')}
            >
              <Text style={styles.text}>Rainfall</Text>
              <Image
                style={styles.imagestyle}
                source={require('../../assets/backgroundImages/purpleDrops.png')}
              />
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Leaves')}
            >
              <Text style={styles.text}>Rustling Fields</Text>
              <Image
                style={styles.imagestyle}
                source={require('../../assets/backgroundImages/purpleFields.png')}
              />
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Streams')}
            >
              <Text style={styles.text}>Bubbling Brooks</Text>
              <Image
                style={styles.imagestyle}
                source={require('../../assets/backgroundImages/purpleTreesWithBridge.png')}
              />
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Wind')}
            >
              <Text style={styles.text}>Wind</Text>
              <Image
                style={styles.imagestyle}
                source={require('../../assets/backgroundImages/purpleFallingSmokeWisps.png')}
              />
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Nature')}
            >
              <Text style={styles.text}>Nature Sounds</Text>
              <Image
                style={styles.imagestyle}
                source={require('../../assets/backgroundImages/purpleForest.png')}
              />
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Heartbeat')}
            >
              <Text style={styles.text}>Heartbeat</Text>
              <Image
                style={styles.imagestyle}
                source={require('../../assets/backgroundImages/purpleHeartbeat.png')}
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
