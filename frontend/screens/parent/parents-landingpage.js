import React, { Component, useState } from 'react';
import { StyleSheet, View, Text} from 'react-native';

import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';
import MusicApp from './index';


function cacheImages(images) {
    return images.map(image => {
      if (typeof image === 'string') {
        return Image.prefetch(image);
      } else {
        return Asset.fromModule(image).downloadAsync();
      }
    });
  }

class Parent extends Component{
    constructor(props) {
    super(props)
    this.state = {
        isReady:false
    }
}
async _loadAssetsAsync() {
    const imageAssets = cacheImages([require('./PG.png')]);

    await Promise.all([...imageAssets]);
  }
render() {
    if (!this.state.isReady) {
        return (
          <AppLoading
            startAsync={this._loadAssetsAsync}
            onFinish={() => this.setState({ isReady: true })}
            onError={console.warn}
          />
        );
      }
      return <MusicApp props={this.props}/>;
}}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    }
  });
export default Parent