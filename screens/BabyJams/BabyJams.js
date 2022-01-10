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

export default function BabyJams({ navigation }) {
  return (
    <ImageBackground
      source={require('../../assets/backgroundImages/beautifulBlackBabyBoy.png')}
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
              onPress={() => navigation.navigate('Baby Mozart')}
            >
              <Text style={styles.text}>Baby Mozart</Text>
              <Image
                style={styles.imagestyle}
                source={require('../../assets/backgroundImages/babyMozart.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Gospel Lullabies')}
            >
              <Text style={styles.text}>Gospel Lullabies</Text>
              <Image
                style={styles.imagestyle}
                source={require('../../assets/backgroundImages/babyBlackOutfit.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Brahms Classical')}
            >
              <Text style={styles.text}>Brahms' Classical</Text>
              <Image
                style={styles.imagestyle}
                source={require('../../assets/backgroundImages/beautifulBabySmile.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Mega Lullaby')}
            >
              <Text style={styles.text}>Mega Lullaby</Text>
              <Image
                style={styles.imagestyle}
                source={require('../../assets/backgroundImages/babyTeddyBear.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Hush Little Baby')}
            >
              <Text style={styles.text}>Hush Little Baby</Text>
              <Image
                style={styles.imagestyle}
                source={require('../../assets/backgroundImages/beautifulSleepingBaby.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Rockabye Baby')}
            >
              <Text style={styles.text}>Rockabye Baby</Text>
              <Image
                style={styles.imagestyle}
                source={require('../../assets/backgroundImages/babyRedHat.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Star Light Star Bright')}
            >
              <Text style={styles.text}>Star Light, Star Bright</Text>
              <Image
                style={styles.imagestyle}
                source={require('../../assets/backgroundImages/beautifulBlackAngelBaby.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Super Simple Songs')}
            >
              <Text style={styles.text}>Super Simple Songs</Text>
              <Image
                style={styles.imagestyle}
                source={require('../../assets/backgroundImages/adorableCurlyHairedBaby.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('10 Hour Lullaby')}
            >
              <Text style={styles.text}>10 Hr Lullaby</Text>
              <Image
                style={styles.imagestyle}
                source={require('../../assets/backgroundImages/beautifulBabyWearingPurple.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Brahms Soothing')}
            >
              <Text style={styles.text}>Brahms' Soothing</Text>
              <Image
                style={styles.imagestyle}
                source={require('../../assets/backgroundImages/handsomeBlackBaby.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Jazz Lullabies')}
            >
              <Text style={styles.text}>Jazz Lullabies</Text>
              <Image
                style={styles.imagestyle}
                source={require('../../assets/backgroundImages/adorableBabyInPurpleSuit.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Disney Lullabies')}
            >
              <Text style={styles.text}>Disney Lullabies</Text>
              <Image
                style={styles.imagestyle}
                source={require('../../assets/backgroundImages/teddybearBaby.png')}
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
