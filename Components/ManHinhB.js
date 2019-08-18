import React, { Component } from "react";
import { View, Text } from "react-native";

export default class MaHinhB extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "green" }}>
                <Text style={{ font: 100, color: "white" }}>B</Text>
            </View>
        )
    }
}