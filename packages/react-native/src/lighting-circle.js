import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const LightingCircleIcon = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color="rgba(0, 0, 0, 0.9)"
    {...props}
  >
    <Path
      d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C0.999999 5.92487 5.92487 1 12 1C18.0751 0.999999 23 5.92487 23 12ZM12.0848 19.5H10V14.5L6.29015 14.5L11.9152 4.5L14 4.5V9.5L17.7098 9.5L12.0848 19.5ZM12 15.5714L14.2902 11.5H12V8.42862L9.70985 12.5H12L12 15.5714Z"
      fill="currentColor"
    />
  </Svg>
);
export { LightingCircleIcon };

export default LightingCircleIcon;
