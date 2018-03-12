import React, {Component} from 'react';
import {
    Image,
    View
} from 'react-native';

export default class Share extends Component {
    render() {
        return (
            <Image
                    style={{width: 30, height: 30}}
                    source={require('../../assets/icons/paper-plane.png')}/>
        )
    }
};