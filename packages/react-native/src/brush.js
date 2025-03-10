import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const BrushIcon = (props) => (
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
      d="M11.92 23.4937L0.793945 12.3676L10.3014 2.86019L13.134 5.69282L16.4085 2.41846L21.8693 7.87928L18.5948 11.1536L21.4274 13.9862L11.92 23.4937ZM14.9942 17.591L6.69659 9.29338L3.62237 12.3676L11.92 20.6652L14.9942 17.591ZM8.1108 7.87917L16.4084 16.1768L18.599 13.9862L15.7664 11.1536L19.0408 7.87925L16.4084 5.24686L13.134 8.52123L10.3014 5.68862L8.1108 7.87917Z"
      fill="currentColor"
    />
  </Svg>
);
export { BrushIcon };

export default BrushIcon;
