import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const PreciseMonitorIcon = (props) => (
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
      d="M13 2V8H11V2H13ZM4 2.58579L9.91421 8.5L8.5 9.91421L2.58579 4L4 2.58579ZM21.4142 4L15.5 9.91421L14.0858 8.5L20 2.58579L21.4142 4ZM10.2676 11C10.6134 10.4022 11.2597 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C11.2597 14 10.6134 13.5978 10.2676 13H2V11H10.2676ZM16 11H22V13H16V11ZM9.91421 15.5L4 21.4142L2.58579 20L8.5 14.0858L9.91421 15.5ZM15.5 14.0858L21.4142 20L20 21.4142L14.0858 15.5L15.5 14.0858ZM13 16V22H11V16H13Z"
      fill="currentColor"
    />
  </Svg>
);
export { PreciseMonitorIcon };

export default PreciseMonitorIcon;
