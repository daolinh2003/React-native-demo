import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import {PinIcon} from '../util/icons';

export default class Button extends Component {
    render() {
        let bgColor, textColor, textWeight;
            if (this.props.red) {
                bgColor = '#f00';
                textColor = '#fff';
            } else {
                bgColor = '#cecece';
                textWeight = 'bold';
                textColor = '#000';
            }
        return (
            <View style={[styles.PinButton, {backgroundColor: bgColor}]}>
                {this.props.icon && <PinIcon/>}
                <Text style={[{color: textColor}, {fontWeight: textWeight}]}>{this.props.text}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    PinButton: {
        flexDirection: 'row',
        padding: 8,
        borderRadius: 6,
        width: 70,
        justifyContent: 'space-around'
    }
})