import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const PersonalInformationIcon = (props) => (
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
      d="M3 1H15.4142L21 6.58579V23H3V1ZM5 3V21H19V7.41421L14.5858 3H5ZM12 9C11.1716 9 10.5 9.67157 10.5 10.5C10.5 11.3284 11.1716 12 12 12C12.8284 12 13.5 11.3284 13.5 10.5C13.5 9.67157 12.8284 9 12 9ZM8.5 10.5C8.5 8.567 10.067 7 12 7C13.933 7 15.5 8.567 15.5 10.5C15.5 12.433 13.933 14 12 14C10.067 14 8.5 12.433 8.5 10.5ZM6 19C6 16.7909 7.79086 15 10 15H14C16.2091 15 18 16.7909 18 19V20H16V19C16 17.8954 15.1046 17 14 17H10C8.89543 17 8 17.8954 8 19V20H6V19Z"
      fill="currentColor"
    />
  </Svg>
);
export { PersonalInformationIcon };

export default PersonalInformationIcon;
