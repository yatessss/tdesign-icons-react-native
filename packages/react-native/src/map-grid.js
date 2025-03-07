import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const MapGridIcon = (props) => (
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
      d="M2 2H22V22H2V2ZM4 4V20H20V4H4ZM9 6V7H11V6H13V7H15V6H17V7H18V9H17V11H18V13H17V15H18V17H17L17 18H15V17H13V18H11V17H9V18H7L7 17H6V15H7V13H6V11H7V9H6V7H7V6H9ZM9 9V11H11V9H9ZM13 9V11H15V9H13ZM15 13H13V15H15L15 13ZM11 15V13H9L9 15H11Z"
      fill="currentColor"
    />
  </Svg>
);
export { MapGridIcon };

export default MapGridIcon;
