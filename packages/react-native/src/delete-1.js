import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Delete1Icon = (props) => (
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
      d="M7.5 1H16.5V4H22V6H19.971L19.471 23H4.52898L4.02898 6H2V4H7.5V1ZM9.5 4H14.5V3H9.5V4ZM6.02984 6L6.47102 21H17.529L17.9702 6H6.02984ZM9.17158 9.25736L12 12.0858L14.8284 9.25736L16.2426 10.6716L13.4142 13.5L16.2426 16.3284L14.8284 17.7426L12 14.9142L9.17158 17.7426L7.75737 16.3284L10.5858 13.5L7.75737 10.6716L9.17158 9.25736Z"
      fill="currentColor"
    />
  </Svg>
);
export { Delete1Icon };

export default Delete1Icon;
