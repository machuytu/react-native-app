import React, {Component} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

export default class Connguoi extends Component{
    render() {
        return(
            
            <View style={ao.bao}>
                <TouchableOpacity><Text>{this.props.hoten}</Text></TouchableOpacity>
            </View>
        )
    }
}

var ao = StyleSheet.create({
    bao:{width:100, height: 100, backgroundColor:"yellow",margin:20}
});