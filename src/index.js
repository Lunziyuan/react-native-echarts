import React from 'react'
import { WebView } from 'react-native-webview';
import { getEchartHtmlString } from './echartHtml'

const echartHtml = require('./echart.html')

export default class Echart extends React.Component {

  // shouldComponentUpdate(nextProps, nextState) {

  // }

  render() {
    const { ...rst } = this.props
    return (
      <WebView
        source={echartHtml}
        originWhitelist={['*']}
        { ...rst }
      />
    )
  }
}

