import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const AlignTopIcon = (props) => (
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
      d="M3 3H4H20H21V5H20L4 5H3V3ZM12 5.58579L11.2929 6.29289L7.29289 10.2929L6.58579 11L8 12.4142L8.70711 11.7071L11 9.41422V13.7826V15.4783V20V21H13V20V15.4783V13.7826V9.41421L15.2929 11.7071L16 12.4142L17.4142 11L16.7071 10.2929L12.7071 6.29289L12 5.58579Z"
      fill="currentColor"
    />
  </Svg>
);
export { AlignTopIcon };

export default AlignTopIcon;
