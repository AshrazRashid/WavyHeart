# @wavyheart/heart-progress

A customizable animated heart progress component for React Native.

## Installation

```sh
npm install @wavyheart/heart-progress
# or
yarn add @wavyheart/heart-progress
```

> **Note:** This package requires `react-native-svg` as a peer dependency.

## Usage

```jsx
import HeartProgress from "@wavyheart/heart-progress";

<HeartProgress percentage={75} size={150} Username="John Doe" />;
```

## Props

| Prop       | Type   | Default | Description                         |
| ---------- | ------ | ------- | ----------------------------------- |
| percentage | number | 50      | Progress percentage (0-100)         |
| size       | number | 120     | Width/height of the heart in pixels |
| Username   | string |         | Username to display below the heart |

## License

MIT
