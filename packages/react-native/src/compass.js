import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CompassIcon = (props) => (
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
      d="M21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12ZM12 1C18.0751 0.999999 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM17.4348 6.5652L14.7947 14.7956L6.56435 17.4357L9.20448 9.20526L17.4348 6.5652ZM10.7947 10.7955L9.65667 14.3434L13.2045 13.2054L14.3425 9.65749L10.7947 10.7955Z"
      fill="currentColor"
    />
  </Svg>
);
export { CompassIcon };

export default CompassIcon;
