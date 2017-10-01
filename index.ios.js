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
import GoogleMap from 'react-native-maps-google';

export default class couriousMaps extends Component {
  render() {
    return (
        <View style={styles.container}>
          <GoogleMap style={styles.map}
                     cameraPosition={{auto: true, zoom: 10}}
                     showsUserLocation={true}
                     scrollGestures={true}
                     zoomGestures={true}
                     tiltGestures={true}
                     rotateGestures={true}
                     consumesGesturesInView={true}
                     compassButton={true}
                     myLocationButton={true}
                     indoorPicker={true}
                     allowScrollGesturesDuringRotateOrZoom={true}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('couriousMaps', () => couriousMaps);
