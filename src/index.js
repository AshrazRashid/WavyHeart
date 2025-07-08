import React, { useRef, useEffect, useState } from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";
import Svg, {
  Path,
  Defs,
  ClipPath,
  G,
  LinearGradient,
  Stop,
} from "react-native-svg";

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

const HeartProgress = ({
  percentage = 50,
  size = 120,
  Username = "",
  gradientColors = ["#ff6b6b", "#e63946"],
  backgroundColor = "#eee",
  waveAmplitude = 8,
  waveSpeed = 2000,
  textColor = "#000",
  fontSize = 16,
  usernameFontSize = 18,
  showPercentage = true,
  showUsername = true,
  style = {},
}) => {
  const pct = Math.max(0, Math.min(percentage, 100));
  const fillPercent = pct / 100;

  const [phase, setPhase] = useState(0);
  const phaseAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const anim = Animated.loop(
      Animated.timing(phaseAnim, {
        toValue: 2 * Math.PI,
        duration: waveSpeed,
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
  }, [phaseAnim, waveSpeed]);

  function getWavePath(phase, fillPercent) {
    const baseY = 102 - 86 * fillPercent;
    let path = `M0,${baseY}`;
    for (let x = 0; x <= WAVE_WIDTH; x += 1) {
      const y =
        baseY +
        Math.sin((x / WAVE_WIDTH) * 2 * Math.PI + phase) * waveAmplitude;
      path += ` L${x},${y}`;
    }
    path += ` L${WAVE_WIDTH},102 L0,102 Z`;
    return path;
  }

  return (
    <View
      style={[styles.container, { width: size, height: size * 1.1 }, style]}
    >
      <Svg width={size} height={size * 1.1} viewBox="0 0 120 110">
        <Defs>
          <ClipPath id="heartClip">
            <Path d="M60 100 C 20 70, 0 40, 30 25 A 25 25 0 0 1 60 40 A 25 25 0 0 1 90 25 C 120 40, 100 70, 60 100 Z" />
          </ClipPath>
          <LinearGradient id="heartGradient" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0%" stopColor={gradientColors[0]} stopOpacity="1" />
            <Stop offset="100%" stopColor={gradientColors[1]} stopOpacity="1" />
          </LinearGradient>
        </Defs>
        {/* Heart background */}
        <Path
          d="M60 100 C 20 70, 0 40, 30 25 A 25 25 0 0 1 60 40 A 25 25 0 0 1 90 25 C 120 40, 100 70, 60 100 Z"
          fill={backgroundColor}
        />
        {/* Animated wave fill */}
        <G clipPath="url(#heartClip)">
          <Path
            d={getWavePath(phase, fillPercent)}
            fill="url(#heartGradient)"
            opacity={0.9}
          />
        </G>
      </Svg>
      <View style={styles.textContainer}>
        {showUsername && (
          <Text
            style={[
              styles.username,
              { color: textColor, fontSize: usernameFontSize },
            ]}
          >
            {Username}
          </Text>
        )}
        {showPercentage && (
          <Text style={[styles.percentage, { color: textColor, fontSize }]}>
            {pct}%
          </Text>
        )}
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
