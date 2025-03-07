import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const PreviousIcon = (props) => (
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
      d="M17.25 4.33594V19.6644L9.58579 12.0002L17.25 4.33594ZM8.5 5.00015V19.0002H6.5V5.00015H8.5ZM12.4142 12.0002L15.25 14.8359V9.16436L12.4142 12.0002Z"
      fill="currentColor"
    />
  </Svg>
);
export { PreviousIcon };

export default PreviousIcon;
