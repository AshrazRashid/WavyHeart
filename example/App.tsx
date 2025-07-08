import React from 'react';
import { View, StyleSheet } from 'react-native';
import HeartProgress from './components/HeartProgress'; // Adjust path if needed

export default function App() {
  return (
    <View style={styles.container}>
      <HeartProgress Username="John Doe" percentage={50} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
});
