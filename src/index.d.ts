import { FC } from "react";
import { ViewProps } from "react-native";

export interface HeartProgressProps extends ViewProps {
  percentage?: number;
  size?: number;
  Username?: string;
  /**
   * Gradient colors for the wave fill. Default: ['#ff6b6b', '#e63946']
   */
  gradientColors?: [string, string];
  /**
   * Background color of the heart. Default: '#eee'
   */
  backgroundColor?: string;
  /**
   * Amplitude of the wave animation. Default: 8
   */
  waveAmplitude?: number;
  /**
   * Speed of the wave animation in ms. Default: 2000
   */
  waveSpeed?: number;
  /**
   * Color of the percentage and username text. Default: '#000'
   */
  textColor?: string;
  /**
   * Font size for the percentage text. Default: 16
   */
  fontSize?: number;
  /**
   * Font size for the username text. Default: 18
   */
  usernameFontSize?: number;
  /**
   * Show the percentage text. Default: true
   */
  showPercentage?: boolean;
  /**
   * Show the username text. Default: true
   */
  showUsername?: boolean;
  /**
   * Additional style for the container.
   */
  style?: object;
}

declare const HeartProgress: FC<HeartProgressProps>;
export default HeartProgress;
