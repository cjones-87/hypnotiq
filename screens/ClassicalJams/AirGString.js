import React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function AirGString() {
  return (
    <WebView
      allowsFullscreenVideo
      style={styles.container}
      source={{ uri: 'https://www.youtube.com/watch?v=01WW3W8k4-w&t=8203s' }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
