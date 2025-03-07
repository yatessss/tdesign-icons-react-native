import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CaretRightIcon = (props) => (
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
      d="M8.5 21.4143L17.9142 12.0001L8.5 2.58588L8.5 21.4143ZM10.5 16.5859L10.5 7.41431L15.0858 12.0001L10.5 16.5859Z"
      fill="currentColor"
    />
  </Svg>
);
export { CaretRightIcon };

export default CaretRightIcon;
