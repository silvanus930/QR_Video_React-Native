import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import MyWebView from '../components/MyWebView'
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { SafeAreaView } from "react-native";

export default function WebScreen({ navigation }) {


  return (
    <SafeAreaView style={{ flex: 1 }}>
        <WebView
        source={{ uri: 'https://www.qrcode-tiger.com/' }} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
});

