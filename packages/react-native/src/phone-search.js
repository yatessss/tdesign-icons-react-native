import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const PhoneSearchIcon = (props) => (
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
      d="M4 1H20V11H18V3H6V21H12.5V23H4V1ZM17.25 14.5C18.7688 14.5 20 15.7312 20 17.25C20 18.0083 19.6931 18.6949 19.1967 19.1924C19.1937 19.1954 19.1907 19.1984 19.1876 19.2014C18.6905 19.695 18.0059 20 17.25 20C15.7312 20 14.5 18.7688 14.5 17.25C14.5 15.7312 15.7312 14.5 17.25 14.5ZM21.2419 19.8254C21.7216 19.0834 22 18.1992 22 17.25C22 14.6266 19.8734 12.5 17.25 12.5C14.6266 12.5 12.5 14.6266 12.5 17.25C12.5 19.8734 14.6266 22 17.25 22C18.2004 22 19.0857 21.7209 19.8282 21.2401L21.4983 22.9142L22.9142 21.5017L21.2419 19.8254Z"
      fill="currentColor"
    />
  </Svg>
);
export { PhoneSearchIcon };

export default PhoneSearchIcon;
