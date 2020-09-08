import React from 'react';
import { Platform } from 'react-native';
import { WebView } from 'react-native-webview';

export default class Echart extends React.Component {

  render() {
    const { ...rst } = this.props;
    const htmlUrl = Platform.OS === 'ios' ? 'echartsAssets/echart.html' : 'file:///android_asset/echartsAssets/echart.html';
    const baseUrl = Platform.OS === 'ios' ? 'echartsAssets/' : 'file:///android_asset/echartsAssets/';
    return (
      <WebView
        source={{'uri':htmlUrl,baseUrl}}
        originWhitelist={['*']}
        { ...rst }
      />
    )
  }
}

