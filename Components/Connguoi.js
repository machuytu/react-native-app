import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


export default class Connguoi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chieucao: 0
        }
    }

    clickme() {
        this.setState({
            chieucao: this.state.chieucao + 100
        });
    }

    render() {
        return (
            <TouchableOpacity onPress={() => { this.clickme() }}>
                <View style={ao.bao}>
                    <Text>{this.props.hoten}</Text>
                    <Text>{this.state.chieucao}</Text>
                </View>
            </TouchableOpacity>

        )
    }
}

var ao = StyleSheet.create({
    bao: { width: 100, height: 100, backgroundColor: "yellow", margin: 20 }
});