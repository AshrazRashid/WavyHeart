import React, {Component} from 'react';
import {StyleSheet, View, Animated, Image, Text} from 'react-native';

import utility from '../utility';
import Layers from './Layers';

class HeartProgress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startValue: new Animated.Value(0),
      endValue: 1,
      duration: 800,
    };
  }

  componentDidMount() {
    this._update();
  }

  _update = () => {
    Animated.timing(this.state.startValue, {
      toValue: this.state.endValue,
      duration: this.state.duration,
      useNativeDriver: true,
    }).start();
  };

  _returnLayers = () => {
    const {percentage} = this.props;
    const {startValue} = this.state;

    // let value = Platform.OS === 'ios' ? 40 : 30;

    let value = 30;

    if (percentage <= 10) {
      return (
        <Animated.Image
          source={Layers.layer1}
          resizeMode={'contain'}
          style={{
            position: 'absolute',
            width: utility.widthRatio(120),
            height: utility.widthRatio(170),
            transform: [
              {
                translateY: startValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [100, value + 5],
                }),
              },
            ],
          }}
        />
      );
    } else if (percentage <= 20) {
      return (
        <Animated.Image
          source={Layers.layer2}
          resizeMode={'contain'}
          style={{
            position: 'absolute',
            width: utility.widthRatio(120),
            height: utility.widthRatio(170),
            transform: [
              {
                translateY: startValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [100, value],
                }),
              },
            ],
          }}
        />
      );
    } else if (percentage <= 30) {
      return (
        <Animated.Image
          source={Layers.layer3}
          resizeMode={'contain'}
          style={{
            position: 'absolute',
            width: utility.widthRatio(120),
            height: utility.widthRatio(170),
            transform: [
              {
                translateY: startValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [100, value],
                }),
              },
            ],
          }}
        />
      );
    } else if (percentage <= 40) {
      return (
        <Animated.Image
          source={Layers.layer4}
          resizeMode={'contain'}
          style={{
            position: 'absolute',
            width: utility.widthRatio(120),
            height: utility.widthRatio(170),
            transform: [
              {
                translateY: startValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [100, value],
                }),
              },
            ],
          }}
        />
      );
    } else if (percentage <= 50) {
      return (
        <Animated.Image
          source={Layers.layer5}
          resizeMode={'contain'}
          style={{
            position: 'absolute',
            width: utility.widthRatio(120),
            height: utility.widthRatio(170),
            transform: [
              {
                translateY: startValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [100, value],
                }),
              },
            ],
          }}
        />
      );
    } else if (percentage <= 60) {
      return (
        <Animated.Image
          source={Layers.layer6}
          resizeMode={'contain'}
          style={{
            position: 'absolute',
            width: utility.widthRatio(120),
            height: utility.widthRatio(170),
            transform: [
              {
                translateY: startValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [100, value - 10],
                }),
              },
            ],
          }}
        />
      );
    } else if (percentage <= 70) {
      return (
        <Animated.Image
          source={Layers.layer7}
          resizeMode={'contain'}
          style={{
            position: 'absolute',
            width: utility.widthRatio(120),
            height: utility.widthRatio(170),
            transform: [
              {
                translateY: startValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [100, value - 10],
                }),
              },
            ],
          }}
        />
      );
    } else if (percentage <= 80) {
      return (
        <Animated.Image
          source={Layers.layer8}
          resizeMode={'contain'}
          style={{
            position: 'absolute',
            width: utility.widthRatio(120),
            height: utility.widthRatio(170),
            transform: [
              {
                translateY: startValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [100, value - 10],
                }),
              },
            ],
          }}
        />
      );
    } else if (percentage <= 90) {
      return (
        <Animated.Image
          source={Layers.layer9}
          resizeMode={'contain'}
          style={{
            position: 'absolute',
            width: utility.widthRatio(100),
            height: utility.widthRatio(170),
            transform: [
              {
                translateY: startValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [100, value - 20],
                }),
              },
            ],
          }}
        />
      );
    } else if (percentage <= 100) {
      return (
        <Animated.Image
          source={Layers.layer10}
          resizeMode={'contain'}
          style={{
            position: 'absolute',
            width: utility.widthRatio(100),
            height: utility.widthRatio(170),
            transform: [
              {
                translateY: startValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [100, value - 38],
                }),
              },
            ],
          }}
        />
      );
    }
  };

  render() {
    const {percentage, style, Username} = this.props;
    return (
      <View style={[style, styles.container]}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          {this._returnLayers()}
          <Image
            resizeMode={'contain'}
            style={{
              position: 'absolute',
              width: utility.widthRatio(120),
              height: utility.widthRatio(200),
            }}
            source={Layers.layer0}
          />
          <Text style={styles.text}>
            {percentage} {'%'}{' '}
          </Text>
        </View>
        <Text
          style={{
            position: 'absolute',
            bottom: 0,
            textAlign: 'center',
            fontSize: 18,
          }}>
          {Username}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 170,
    width: 120,
    marginHorizontal: utility.smallMargin,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    position: 'absolute',
    fontSize: 26,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HeartProgress;
