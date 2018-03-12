/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  ScrollView
} from 'react-native';
import Pin from './components/Pin';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pin: {
        baby: {
          source: require('./assets/images/baby_girl.jpg'),
          originalWidth: '236',
          originalHeight: '350'
        },
        nature: {
          source: require('./assets/images/nature.png'),
          originalWidth: '450',
          originalHeight: '239'
        }
      }
    }
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Pin pinsource={this.state.pin.baby}/>
        <Pin pinsource={this.state.pin.nature}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F5FCFF',
  }
});
