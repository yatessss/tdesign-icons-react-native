import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const WatchIcon = (props) => (
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
      d="M7.11722 0H16.8828L17.3859 4.02458C18.8605 4.21393 20 5.47389 20 7V9H21V15H20V17C20 18.5261 18.8605 19.7861 17.3859 19.9754L16.8828 24H7.11722L6.61414 19.9754C5.13954 19.7861 4 18.5261 4 17V7C4 5.47389 5.13954 4.21393 6.61414 4.02458L7.11722 0ZM8.63278 4H15.3672L15.1172 2H8.88278L8.63278 4ZM7 18H17C17.5523 18 18 17.5523 18 17V7C18 6.44772 17.5523 6 17 6H7C6.44772 6 6 6.44772 6 7V17C6 17.5523 6.44772 18 7 18ZM8.63278 20L8.88278 22H15.1172L15.3672 20H8.63278Z"
      fill="currentColor"
    />
  </Svg>
);
export { WatchIcon };

export default WatchIcon;
