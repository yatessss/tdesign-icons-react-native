import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const MergeCellsIcon = (props) => (
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
      d="M2 2H22V22H2V2ZM4 4V20H11V16H13V20H20V4H13V8H11V4H4ZM17.182 10.232L15.4142 11.9998L17.182 13.7676L15.7678 15.1818L12.5858 11.9998L15.7678 8.81783L17.182 10.232ZM8.32989 8.81821L11.5119 12.0002L8.32989 15.1822L6.91568 13.768L8.68344 12.0002L6.91568 10.2324L8.32989 8.81821Z"
      fill="currentColor"
    />
  </Svg>
);
export { MergeCellsIcon };

export default MergeCellsIcon;
