import { FC } from "react";
import { ViewProps } from "react-native";

export interface HeartProgressProps extends ViewProps {
  percentage?: number;
  size?: number;
  Username?: string;
}

declare const HeartProgress: FC<HeartProgressProps>;
export default HeartProgress;
