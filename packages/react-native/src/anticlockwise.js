import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const AnticlockwiseIcon = (props) => (
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
      d="M4.33338 4.99948C4.33367 3.34283 5.67673 2 7.33338 2H13.0004V4H7.33338C6.78117 4 6.33348 4.44761 6.33338 4.99983L6.33226 11.5H4.33997L0.585938 7.44565L2.05346 6.08683L4.33277 8.54849L4.33338 4.99948ZM7.99911 6H22.9991V21H7.99911V6ZM9.99911 8V19H20.9991V8H9.99911Z"
      fill="currentColor"
    />
  </Svg>
);
export { AnticlockwiseIcon };

export default AnticlockwiseIcon;
