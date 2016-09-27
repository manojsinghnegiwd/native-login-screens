/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import FullBg from './Screens/FullBg/FullBg'

class native_login_screens extends Component {
  render() {
    return (
      <View>
        <FullBg />
      </View>
    );
  }
}

AppRegistry.registerComponent('native_login_screens', () => native_login_screens);
