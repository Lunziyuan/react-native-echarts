import React from 'react';
import { Platform } from 'react-native';
import { WebView } from 'react-native-webview';

export default class Echart extends React.Component {

  componentWillReceiveProps(nextProps) {
    if(JSON.stringify(nextProps.option) !== JSON.stringify(this.props.option)) {
      this.webview.reload();
    }
  }

  render() {
    const { option, height, width, style, webviewStyle, ...rst } = this.props;
    const htmlUrl = Platform.OS === 'ios' ? 'echartsAssets/echart.html' : 'file:///android_asset/echartsAssets/echart.html';
    const baseUrl = Platform.OS === 'ios' ? 'echartsAssets/' : 'file:///android_asset/echartsAssets/';
    return (
      <WebView
        ref={ref => this.webview = ref}
        injectedJavaScript={`
          document.getElementById('main').style.height = "${height}";
          document.getElementById('main').style.width = "${width}";
          var myChart = echarts.init(document.getElementById('main'));
          myChart.setOption(${JSON.stringify(option)});
        `}
        source={{'uri':htmlUrl,baseUrl}}
        originWhitelist={['*']}
        style={{
          height,
          width,
          backgroundColor: 'transparent',
          ...webviewStyle
        }}
        { ...rst }
      />
    )
  }
}

