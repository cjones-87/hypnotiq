import React from 'react';
import { Video } from 'expo-av';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  const backgroundVideo = React.useRef(null);

  return (
    <View style={styles.container}>
      <Video
        ref={backgroundVideo}
        style={styles.video}
        source={require('../assets/backgroundImages/Hypnotiq.mp4')}
        resizeMode="contain"
        shouldPlay
        isLooping
        isMuted
      />
      <Text
        style={styles.text}
        onPress={() => navigation.navigate('Main Menu')}
      >
        <BlinkingText textData={'Dream On!'} style={styles.text} />
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    flex: 1,
    alignSelf: 'stretch',
  },
  text: {
    position: 'absolute',
    flex: 1,
    fontSize: 50,
    fontWeight: 'bold',
    lineHeight: 700,
    color: 'white',
  },
});

export class BlinkingText extends React.Component {
  constructor() {
    super();

    this.state = {
      visibleText: true,
    };

    setInterval(() => {
      this.setState((previousState) => {
        return { visibleText: !previousState.visibleText };
      });
    }, 1250);
  }
  render() {
    const { textData } = this.props;
    const { visibleText } = this.state;
    return <Text>{visibleText ? textData : ''}</Text>;
  }
}
