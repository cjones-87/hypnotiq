import React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function Nature() {
  return (
    <WebView
      allowsFullscreenVideo
      style={styles.container}
      source={{ uri: 'https://www.youtube.com/watch?v=nZUMdnky11E' }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
