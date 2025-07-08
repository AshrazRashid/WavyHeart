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

| Prop             | Type             | Default                | Description                               |
| ---------------- | ---------------- | ---------------------- | ----------------------------------------- |
| percentage       | number           | 50                     | Progress percentage (0-100)               |
| size             | number           | 120                    | Width/height of the heart in pixels       |
| Username         | string           |                        | Username to display below the heart       |
| gradientColors   | [string, string] | ['#ff6b6b', '#e63946'] | Gradient colors for the wave fill         |
| backgroundColor  | string           | '#eee'                 | Background color of the heart             |
| waveAmplitude    | number           | 8                      | Amplitude of the wave animation           |
| waveSpeed        | number           | 2000                   | Speed of the wave animation in ms         |
| textColor        | string           | '#000'                 | Color of the percentage and username text |
| fontSize         | number           | 16                     | Font size for the percentage text         |
| usernameFontSize | number           | 18                     | Font size for the username text           |
| showPercentage   | boolean          | true                   | Show the percentage text                  |
| showUsername     | boolean          | true                   | Show the username text                    |
| style            | object           |                        | Additional style for the container        |

## Usage Examples

```jsx
import HeartProgress from "@wavyheart/heart-progress";

// Default usage
<HeartProgress percentage={75} size={150} Username="John Doe" />

// Fully customized
<HeartProgress
  percentage={60}
  size={180}
  Username="Jane Smith"
  gradientColors={["#36d1c4", "#1fa2ff"]}
  backgroundColor="#fff0f0"
  waveAmplitude={12}
  waveSpeed={1200}
  textColor="#333"
  fontSize={20}
  usernameFontSize={22}
  showPercentage={true}
  showUsername={true}
  style={{ marginVertical: 32 }}
/>
```

## License

MIT

![Demo](./demo.gif)
