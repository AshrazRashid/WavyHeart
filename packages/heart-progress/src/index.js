import React, { useRef, useEffect, useState } from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";
import Svg, { Path, Defs, ClipPath, G } from "react-native-svg";

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
      })
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
      <Svg width={size} height={size * 1.1} viewBox="0 0 120 122">
        <Defs>
          <ClipPath id="wave-clip">
            <Path d={getWavePath(phase, fillPercent)} />
          </ClipPath>
        </Defs>
        <G clipPath="url(#wave-clip)">
          <Path
            d="M0,102 L120,102 L120,0 L0,0 Z"
            fill="#FF6B6B"
            opacity={0.3}
          />
          <Path
            d="M0,102 L120,102 L120,0 L0,0 Z"
            fill="#FF6B6B"
            opacity={0.3}
          />
          <Path
            d="M0,102 L120,102 L120,0 L0,0 Z"
            fill="#FF6B6B"
            opacity={0.3}
          />
        </G>
      </Svg>
      <View style={styles.textContainer}>
        <Text style={styles.username}>{Username}</Text>
        <Text style={styles.percentage}>{pct}%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    position: "absolute",
    top: "50%",
    transform: [{ translateY: -10 }],
    alignItems: "center",
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  percentage: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF6B6B",
  },
});

export default HeartProgress;
