import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const BillIcon = (props) => (
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
      d="M2 2H3H5H19H21H22V4H21H20V20V22.0806L18.3753 20.7809L16.5339 19.3078L14.9144 20.7474L14.25 21.338L13.5856 20.7474L12 19.338L10.4144 20.7474L9.75 21.338L9.08564 20.7474L7.46605 19.3078L5.6247 20.7809L4 22.0806V20V4H3H2V2ZM6 4V17.9194L6.87531 17.2191L7.53395 16.6922L8.16436 17.2526L9.75 18.662L11.3356 17.2526L12 16.662L12.6644 17.2526L14.25 18.662L15.8356 17.2526L16.4661 16.6922L17.1247 17.2191L18 17.9194V4H6ZM8 7H9H15H16V9H15H9H8V7ZM10 11H9V13H10H14H15V11H14H10Z"
      fill="currentColor"
    />
  </Svg>
);
export { BillIcon };

export default BillIcon;
