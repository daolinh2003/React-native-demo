import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text
} from 'react-native';

import UtilityNavButton from './UtilityNavButton';

import Button from './Button';

import LocalImage from './LocalImage';

export default class Pin extends Component {
    render() {
        return (
            <View style={styles.PinContainer}>
                <View style={styles.PinHeader}>
                    <View style={styles.UtilityNav}>
                        <UtilityNavButton icon="Back"/>
                        <UtilityNavButton icon="Heart"/>
                        <UtilityNavButton icon="Share"/>
                        <UtilityNavButton icon="More"/>
                    </View>
                    <View style={styles.PinButtonContainer}>
                        <Button red icon text="Save"/>
                    </View>
                </View>
                <View style={styles.PinContent}>
                    <LocalImage 
                        source={this.props.pinsource.source}
                        originalHeight={this.props.pinsource.originalHeight}
                        originalWidth={this.props.pinsource.originalWidth}
                        />
                </View>
                <View style={styles.PinMeta}>
                    <View style={styles.PinMetaTextContainer}>
                        <Text>Save from </Text>
                        <Text style={styles.TextBold}>abc.com</Text>
                    </View>
                    <View style={styles.PinButtonContainer}>
                        <Button text="Visit"/>
                    </View>
                </View>
                <View style={styles.PinUser}>
                    <View style={styles.UserAvatar}></View>

                    <View style={styles.UserDescription}>
                        <Text>
                            <Text>Lorem illum aute </Text>
                            <Text style={styles.TextBold}> blanditiis </Text>
                            <Text> excepteur </Text>
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    PinContainer: {
        flex: 1,
        alignSelf: 'stretch'
    },
    PinHeader: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        minHeight: 50,
        padding: 8,
    },
    UtilityNav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 2,
    },
    UtilityButton: {
        backgroundColor: '#cecece',
        justifyContent: 'center'
    },
    PinButtonContainer: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    PinContent: {
        // flex: 3,
        flexDirection: 'row',
        padding: 8
    },
    PinImagePlaceHolder: {
        backgroundColor: '#000',
        // flex: 1,
        alignSelf: 'stretch',
        borderRadius: 6
    },
    PinMeta: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        padding: 8,
        minHeight: 60,
    },
    PinUser: {
        flex: 5,
        flexDirection: 'row',
        paddingLeft: 8,
        paddingRight: 8,
    },
    UserAvatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#000',
        marginRight: 8,
    },
    UserDescription: {
        backgroundColor: '#eee',
        alignSelf: 'stretch',
    },
    TextBold: {
        fontWeight: 'bold'
    }
})