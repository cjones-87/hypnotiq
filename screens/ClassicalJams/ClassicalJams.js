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

export default function ClassicalJams({ navigation }) {
  return (
    <ImageBackground
      source={require('../../assets/backgroundImages/purpleTableCloth.png')}
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
              onPress={() => navigation.navigate('Fur Elise')}
            >
              <Text style={styles.text}>Beethoven - Für Elise</Text>
              <Image
                style={styles.imagestyle}
                source={require('../../assets/backgroundImages/purplePiano.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Einaudi')}
            >
              <Text style={styles.text}>Einaudi - Mix</Text>
              <Image
                style={styles.imagestyle}
                source={require('../../assets/backgroundImages/purpleIceCream.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Air G String')}
            >
              <Text style={styles.text}>Bach - Air On A G String</Text>
              <Image
                style={styles.imagestyle}
                source={require('../../assets/backgroundImages/purpleFlower.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Peer Gynt')}
            >
              <Text style={styles.text}>Ibsen - Peer Gynt</Text>
              <Text style={styles.text}>As Played by Edvard Grieg</Text>
              <Image
                style={styles.imagestyle}
                source={require('../../assets/backgroundImages/purpleSilkyBackground.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Gymnopedie')}
            >
              <Text style={styles.text}>Satie - Gymnopedie #1</Text>
              <Image
                style={styles.imagestyle}
                source={require('../../assets/backgroundImages/purpleSilhouettePaintSplatter.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Romeo & Juliet')}
            >
              <Text style={styles.text}>Armstrong - Romeo & Juliet</Text>
              <Text style={styles.text}>Performed By Andre Rieu</Text>
              <Image
                style={styles.imagestyle}
                source={require('../../assets/backgroundImages/purpleRose.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Clair De Lune')}
            >
              <Text style={styles.text}>Debussy - Claire De Lune</Text>
              <Image
                style={styles.imagestyle}
                source={require('../../assets/backgroundImages/purpleRisingSmoke.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Spiegel Im Spiegel')}
            >
              <Text style={styles.text}>Part - Spiegel Im Spiegel</Text>
              <Image
                style={styles.imagestyle}
                source={require('../../assets/backgroundImages/purplePaintBallSwirl.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Wiengenlied')}
            >
              <Text style={styles.text}>Brahms - Wiengenlied Op.49 #4</Text>
              <Image
                style={styles.imagestyle}
                source={require('../../assets/backgroundImages/purpleLightWisps.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Flight Of The Bumblebee')}
            >
              <Text style={styles.text}>Rimsky-Korsakov</Text>
              <Text style={styles.text}>Flight Of The Bumblebee</Text>
              <Image
                style={styles.imagestyle}
                source={require('../../assets/backgroundImages/purpleBee.png')}
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
