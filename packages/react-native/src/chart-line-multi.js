import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ChartLineMultiIcon = (props) => (
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
      d="M4 2V20H22V22H2V2H4ZM21.9142 5.5L15.5 11.9142L11.5 7.91421L6.5 12.9142L5.08579 11.5L11.5 5.08579L15.5 9.08579L20.5 4.08579L21.9142 5.5ZM21.9142 10.5L15.5 16.9142L11.5 12.9142L6.5 17.9142L5.08579 16.5L11.5 10.0858L15.5 14.0858L20.5 9.08579L21.9142 10.5Z"
      fill="currentColor"
    />
  </Svg>
);
export { ChartLineMultiIcon };

export default ChartLineMultiIcon;
