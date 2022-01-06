import React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function Radiator() {
  return (
    <WebView
      style={styles.container}
      source={{ uri: 'https://www.youtube.com/watch?v=OZaNxvviBy8' }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});