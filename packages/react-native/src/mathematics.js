import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const MathematicsIcon = (props) => (
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
      d="M12.125 1H22V23H2V1.82906L12.125 11.8291V1ZM14.125 21H20V19.6667H16.85V17.6667H20V16.3333H16.85V14.3333H20V13H16.85V11H20V9.66667H16.85V7.66667H20V6.33333H16.85V4.33333H20V3H14.125V21ZM12.125 21V14.6401L4 6.61539V21H12.125Z"
      fill="currentColor"
    />
  </Svg>
);
export { MathematicsIcon };

export default MathematicsIcon;
