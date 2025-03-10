import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ScreencastIcon = (props) => (
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
      d="M1 1.99951L23.0001 1.99951L23.0001 18.9995H17.0001V16.9995L21.0001 16.9995L21.0001 3.99951L3.00013 3.99951L3.00099 16.9995L7.00006 16.9995L7.00007 18.9995L1.00112 18.9995L1 1.99951ZM5.58581 21.9999L12 15.5853L18.4142 21.9994L5.58581 21.9999ZM10.4142 19.9997L13.5859 19.9996L12.0001 18.4137L10.4142 19.9997Z"
      fill="currentColor"
    />
  </Svg>
);
export { ScreencastIcon };

export default ScreencastIcon;
