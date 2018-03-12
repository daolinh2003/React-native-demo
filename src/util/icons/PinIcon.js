import React, {Component} from 'react';
import {
    Image,
    View
} from 'react-native';

export default class PinIcon extends Component {
    render() {
        return (
            <Image
                source={require('../../assets/icons/push-pin.png')}
                style={{width: 20, height: 20}}/>
        )
    }
};