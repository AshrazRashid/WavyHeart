import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import HeartProgress from './components/HeartProgress';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HeartProgress Username={'Test User'} percentage={10} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
