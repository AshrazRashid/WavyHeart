# wavy-heart-progress

A customizable React Native heart-shaped progress indicator component.

## Installation

```sh
npm install wavy-heart-progress
# or
yarn add wavy-heart-progress
```

## Usage

```jsx
import React from "react";
import { View } from "react-native";
import HeartProgress from "wavy-heart-progress";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <HeartProgress Username="Test User" percentage={50} />
    </View>
  );
}
```

## Props

| Prop       | Type   | Required | Description                       |
| ---------- | ------ | -------- | --------------------------------- |
| Username   | string | Yes      | The name to display in the heart. |
| percentage | number | Yes      | Progress percentage (0-100).      |

## Example

See the `example/` directory for a working React Native app using this component.

## License

MIT
