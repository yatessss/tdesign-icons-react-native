import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SailingHotelIcon = (props) => (
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
      d="M7 0.811035L8.17134 1.01475C12.1578 1.70804 14.7554 3.81621 16.3247 6.4944C17.2986 8.1565 17.8635 10.0136 18.1472 11.8471C18.4275 13.659 18.437 15.4713 18.2824 17.0947C18.1431 18.558 17.8658 19.9136 17.508 21H21V23H4V21H7V0.811035ZM9 21H15.3764C15.6746 20.2921 15.9645 19.2532 16.1561 18H9V21ZM9 16H16.3571C16.4055 15.0345 16.3872 14.0197 16.2803 13H9V16ZM9 11H15.9494C15.707 9.95057 15.3545 8.9356 14.8712 7.99996H9V11ZM9 5.99996H13.5131C12.4256 4.77073 10.961 3.79301 9 3.24773V5.99996Z"
      fill="currentColor"
    />
  </Svg>
);
export { SailingHotelIcon };

export default SailingHotelIcon;
