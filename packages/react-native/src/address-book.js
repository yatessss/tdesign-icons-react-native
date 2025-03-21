import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const AddressBookIcon = (props) => (
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
      d="M3 6C3 3.79086 4.79086 2 7 2H21V22H7C4.79086 22 3 20.2091 3 18V6ZM5 14.5351C5.58835 14.1948 6.27143 14 7 14H19V4H17V10.7662L13.5 8.66619L10 10.7662V4H7C5.89543 4 5 4.89543 5 6V14.5351ZM19 16H7C5.89543 16 5 16.8954 5 18C5 19.1046 5.89543 20 7 20H19V16ZM15 4H12V7.23381L13.5 6.33381L15 7.23381V4Z"
      fill="currentColor"
    />
  </Svg>
);
export { AddressBookIcon };

export default AddressBookIcon;
