import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SystemMarkedIcon = (props) => (
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
      d="M1 1H23V11H21V3H3V16H12.5V18H1V1ZM14.5 12.9961H23V23.2906L18.7529 20.6742L14.5 23.2886V12.9961ZM16.5 14.9961V19.7114L18.7541 18.3258L21 19.7094V14.9961H16.5ZM2.25 21H12.5V23H2.25V21Z"
      fill="currentColor"
    />
  </Svg>
);
export { SystemMarkedIcon };

export default SystemMarkedIcon;
