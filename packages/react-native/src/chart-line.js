import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ChartLineIcon = (props) => (
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
      d="M4 2V20H22V22H2V2H4ZM21.9142 8L15.5 14.4142L11.5 10.4142L6.5 15.4142L5.08579 14L11.5 7.58579L15.5 11.5858L20.5 6.58579L21.9142 8Z"
      fill="currentColor"
    />
  </Svg>
);
export { ChartLineIcon };

export default ChartLineIcon;
