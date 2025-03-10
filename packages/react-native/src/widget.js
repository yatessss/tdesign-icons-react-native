import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const WidgetIcon = (props) => (
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
      d="M5.35013 3L18.6499 3L23 12.7878V22H1L1 12.7878L5.35013 3ZM6.64987 5L3.53876 12L20.4612 12L17.3501 5L6.64987 5ZM21 14L3 14L3 20H21V14ZM5 16H7.00391V18.0039H5V16ZM9 16H11.0039V18.0039H9V16Z"
      fill="currentColor"
    />
  </Svg>
);
export { WidgetIcon };

export default WidgetIcon;
