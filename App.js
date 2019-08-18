import React, { Component } from 'react';
import { AppRegistry, Navigator, Text } from 'react-native';
import Connguoi from "./Components/Connguoi.js";

import MaHinhA from "./Components/ManHinhA.js";
import MaHinhB from "./Components/ManHinhB.js";
import MaHinhC from "./Components/ManHinhC.js";

export default class AwesomeProject extends Component {
  renderScene(route, Navigator) {
    switch (route.name) {
      case "mhA": return (
        <MaHinhA />
      )
      case "mhB": return (
        <MaHinhB />
      )
      case "mhC": return (
        <MaHinhC />
      )
    }
  }


  render() {
    return (
      <Navigator
        initialRoute={{ name: "mhC" }}
        renderScene={this.renderScene}
      />
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);