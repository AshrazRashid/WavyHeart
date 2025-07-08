import React, { useRef, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import Svg, { Path, Defs, ClipPath, G } from 'react-native-svg';

const WAVE_WIDTH = 120;
const WAVE_HEIGHT = 20;
const WAVE_AMPLITUDE = 8;
const WAVE_SPEED = 2000; // ms for one loop

function getWavePath(phase, fillPercent) {
  const baseY = 102 - 86 * fillPercent;
  let path = `M0,${baseY}`;
  for (let x = 0; x <= WAVE_WIDTH; x += 1) {
    const y =
      baseY + Math.sin((x / WAVE_WIDTH) * 2 * Math.PI + phase) * WAVE_AMPLITUDE;
    path += ` L${x},${y}`;
  }
  path += ` L${WAVE_WIDTH},102 L0,102 Z`;
  return path;
}

const HeartProgress = ({ percentage = 50, size = 120, Username }) => {
  const pct = Math.max(0, Math.min(percentage, 100));
  const fillPercent = pct / 100;

  const [phase, setPhase] = useState(0);
  const phaseAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const anim = Animated.loop(
      Animated.timing(phaseAnim, {
        toValue: 2 * Math.PI,
        duration: WAVE_SPEED,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    );
    anim.start();

    const id = phaseAnim.addListener(({ value }) => setPhase(value));
    return () => {
      anim.stop();
      phaseAnim.removeListener(id);
    };
  }, [phaseAnim]);

  return (
    <View style={[styles.container, { width: size, height: size * 1.1 }]}>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Svg width={size} height={size * 1.1} viewBox="0 0 120 110">
          <Defs>
            <ClipPath id="heartClip">
              <Path d="M60 102s-46-30-46-66C14 18 32 6 50 18c10 7 10 14 10 14s0-7 10-14c18-12 36 0 36 18 0 36-46 66-46 66z" />
            </ClipPath>
          </Defs>
          {/* Heart background */}
          <Path
            d="M60 102s-46-30-46-66C14 18 32 6 50 18c10 7 10 14 10 14s0-7 10-14c18-12 36 0 36 18 0 36-46 66-46 66z"
            fill="#eee"
          />
          {/* Animated wave fill */}
          <G clipPath="url(#heartClip)">
            <Path
              d={getWavePath(phase, fillPercent)}
              fill="#e63946"
              opacity={0.9}
            />
          </G>
        </Svg>
        <Text style={styles.text}>{pct} %</Text>
      </View>
      <Text style={styles.username}>{Username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    position: 'absolute',
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    top: '40%',
    width: '100%',
  },
  username: {
    position: 'absolute',
    bottom: 0,
    textAlign: 'center',
    fontSize: 18,
    width: '100%',
  },
});

export default HeartProgress;
