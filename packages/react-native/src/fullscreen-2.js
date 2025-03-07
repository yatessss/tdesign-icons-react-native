import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Fullscreen2Icon = (props) => (
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
      d="M4 4H10V6H7.41421L10.4142 9L9 10.4142L6 7.41421V10H4V4ZM14 4H20V10H18V7.41421L15 10.4142L13.5858 9L16.5858 6H14V4ZM10.4142 15L7.41421 18H10V20H4V14H6V16.5858L9 13.5858L10.4142 15ZM15 13.5858L18 16.5858V14H20V20H14V18H16.5858L13.5858 15L15 13.5858Z"
      fill="currentColor"
    />
  </Svg>
);
export { Fullscreen2Icon };

export default Fullscreen2Icon;
