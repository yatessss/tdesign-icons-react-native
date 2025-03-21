import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const EarphoneIcon = (props) => (
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
      d="M12 4C7.58867 4 4 7.6046 4 12.0667V13H5.99979C7.65665 13 9 14.3431 9 16V18C9 19.6569 7.65685 21 6 21H2V12.0667C2 6.51397 6.47021 2 12 2C17.5298 2 22 6.51397 22 12.0667V21H18C16.3431 21 15 19.6569 15 18V16C15 14.3431 16.3431 13 18 13H20V12.0667C20 7.6046 16.4113 4 12 4ZM20 15H18C17.4477 15 17 15.4477 17 16V18C17 18.5523 17.4477 19 18 19H20V15ZM4 15V19H6C6.55228 19 7 18.5523 7 18V16C7 15.4477 6.55228 15 6 15H4Z"
      fill="currentColor"
    />
  </Svg>
);
export { EarphoneIcon };

export default EarphoneIcon;
