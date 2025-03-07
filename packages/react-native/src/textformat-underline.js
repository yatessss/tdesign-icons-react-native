import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const TextformatUnderlineIcon = (props) => (
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
      d="M18 3L18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12L6 3L8 3L8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12L16 3L18 3ZM4 20H20V22H4V20Z"
      fill="currentColor"
    />
  </Svg>
);
export { TextformatUnderlineIcon };

export default TextformatUnderlineIcon;
