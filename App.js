
import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  ImageBackground
} from "react-native";


export default class App extends Component {
  state = {
    ready: false,
    animatedValue: new Animated.Value(0),
    percentage: 0
  };

  _start = () => {
    Animated.timing(this.state.animatedValue, {
      toValue: 1,
      duration: 2000
    }).start();


    this.setState({ percentage: this.state.percentage + 10 })
  };
  render() {

    let { animatedValue, percentage } = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.btn} onPress={() => this._start()}>
          <Text style={styles.textBtn}>Start</Text>
        </TouchableOpacity>




        <View style={{
          width: 170,
          height: 170,
        }}>
          <ImageBackground resizeMode={'contain'} source={require('./Layer0/Layer0.png')} style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1
          }} >



            {percentage == 10 &&
              <Animated.Image

                resizeMode={'stretch'}
                source={require('./Layer1/Layer1.png')}
                style={{
                  transform: [
                    {
                      translateY: animatedValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: [600, 45]
                      })
                    }
                  ],





                }}
              />}

            {percentage == 20 &&
              <Animated.Image
                source={require('./Layer2/Layer2.png')}
                style={{
                  transform: [
                    {
                      translateY: animatedValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: [600, 45]
                      })
                    }
                  ],

                }}
              />}


            {percentage == 30 && <Animated.Image
              source={require('./Layer3/Layer3.png')}
              style={{
                transform: [
                  {
                    translateY: animatedValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [600, 40]
                    })
                  }
                ],

              }}
            />}


            {percentage == 40 && <Animated.Image
              source={require('./Layer4/Layer4.png')}
              style={{
                transform: [
                  {
                    translateY: animatedValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [600, 40]
                    })
                  }
                ],

              }}
            />}




            {percentage == 50 && <Animated.Image
              source={require('./Layer5/Layer5.png')}
              style={{
                transform: [
                  {
                    translateY: animatedValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [600, 40]
                    })
                  }
                ],

              }}
            />}

            {percentage == 60 && <Animated.Image
              source={require('./AnimateLayers/Layer6.png')}
              style={{
                transform: [
                  {
                    translateY: animatedValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [600, 30]
                    })
                  }
                ],

              }}
            />}


            {percentage == 70 &&
              <Animated.Image
                source={require('./AnimateLayers/Layer7.png')}
                style={{
                  transform: [
                    {
                      translateY: animatedValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: [600, 12]
                      })
                    }
                  ],
                }}
              />}

            {percentage == 80 &&
              <Animated.Image
                source={require('./AnimateLayers/Layer8.png')}
                style={{
                  transform: [
                    {
                      translateY: animatedValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: [600, 12]
                      })
                    }
                  ],

                }}
              />}

            {percentage == 90 && <Animated.Image
              source={require('./AnimateLayers/Layer9.png')}
              style={{
                transform: [
                  {
                    translateY: animatedValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [600, 8]
                    })
                  }
                ],

              }}
            />}


            {percentage == 100 && <Animated.Image
              source={require('./AnimateLayers/Layer10.png')}
              style={{
                transform: [
                  {
                    translateY: animatedValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [600, -10.5]
                    })
                  }
                ],

              }}
            />}


            <Text style={styles.text}>{percentage} {'%'} </Text>
          </ImageBackground>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",

  },
  item: {},
  btn: {
    backgroundColor: "#480032",
    width: 100,
    height: 40,
    padding: 3,
    justifyContent: "center",
    borderRadius: 6
  },
  text: {


    position: 'absolute',

    // top: 20,
    marginVertical: 25,
    fontSize: 26,
    color: "black",
    fontWeight: "bold",
    textAlign: "center"
  },
  item1: {
    backgroundColor: "red",
    padding: 20,
    width: 100,
    margin: 10
  },

  textBtn: {
    color: "#f4f4f4",
    fontWeight: "bold",
    textAlign: "center"
  }
});

