import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const StreetRoad1Icon = (props) => (
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
      d="M2 2H22V22H2V2ZM4 4V20H20V4H4ZM10.1767 6.21554L7.78446 18.1767L5.8233 17.7845L8.21554 5.8233L10.1767 6.21554ZM15.7845 5.8233L18.1767 17.7845L16.2155 18.1767L13.8233 6.21554L15.7845 5.8233ZM13 7V10H11V7H13ZM13 11V14H11V11H13ZM13 15V18H11V15H13Z"
      fill="currentColor"
    />
  </Svg>
);
export { StreetRoad1Icon };

export default StreetRoad1Icon;
