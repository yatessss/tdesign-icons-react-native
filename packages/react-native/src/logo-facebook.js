import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const LogoFacebookIcon = (props) => (
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
      d="M8 6C8 2.68629 10.6863 0 14 0H19V6.5H15V8.5H19.2466L17.8022 15H15V24H8V15H4.25V8.5H8V6ZM14 2C11.7909 2 10 3.79086 10 6V10.5H6.25V13H10V22H13V13H16.1978L16.7534 10.5H13V6.5C13 5.39543 13.8954 4.5 15 4.5H17V2H14Z"
      fill="currentColor"
    />
  </Svg>
);
export { LogoFacebookIcon };

export default LogoFacebookIcon;
