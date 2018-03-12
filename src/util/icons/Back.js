import React, {Component} from 'react';
import {
    Image,
    View,
    Text
} from 'react-native';

export default class Back extends Component {
    render() {
        return (
            <View>
                <Image
                    style={{width: 30, height: 30}}
                    source={require('../../assets/icons/back.png')}/>
            </View>

        )
    }
};