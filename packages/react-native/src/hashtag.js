import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const HashtagIcon = (props) => (
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
      d="M10.6043 2.11661L10.0062 7.50007H14.9938L15.6165 1.89575L17.6043 2.11661L17.0062 7.50007H22V9.50007H16.7839L16.2284 14.5001H22V16.5001H16.0062L15.3835 22.1044L13.3957 21.8835L13.9938 16.5001H9.00615L8.38345 22.1044L6.39568 21.8835L6.99385 16.5001H2L2 14.5001H7.21607L7.77162 9.50007L2 9.50007L2 7.50007L7.99385 7.50007L8.61655 1.89575L10.6043 2.11661ZM9.78393 9.50007L9.22838 14.5001H14.2161L14.7716 9.50007H9.78393Z"
      fill="currentColor"
    />
  </Svg>
);
export { HashtagIcon };

export default HashtagIcon;
