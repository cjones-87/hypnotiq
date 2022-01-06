import React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function Fireplace() {
  return (
    <WebView
      style={styles.container}
      source={{ uri: 'https://www.youtube.com/watch?v=K0pJRo0XU8s' }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
