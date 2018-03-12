import React, {Component} from 'react';
import {
    Image,
    View
} from 'react-native';

export default class More extends Component {
    render() {
        return (
            <View>
                <Image
                    style={{width: 30, height: 30}}
                    source={require('../../assets/icons/more.png')}/>
            </View>
        )
    }
};