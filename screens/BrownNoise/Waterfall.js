import React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function Waterfall() {
  return (
    <WebView
      style={styles.container}
      source={{ uri: 'https://www.youtube.com/watch?v=2k7Lht7gViY' }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
