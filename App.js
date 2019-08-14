import React, {Component} from 'react';
import { AppRegistry, View, Text} from 'react-native';
import Connguoi from "./Components/Connguoi.js";

export default class AwesomeProject extends Component {
  render() {
    return (
      <View>
        <Connguoi hoten="Teo"/>
        <Connguoi hoten="Ti"/>
        <Connguoi hoten="Tun"/>
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);