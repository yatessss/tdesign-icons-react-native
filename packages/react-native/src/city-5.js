import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const City5Icon = (props) => (
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
      d="M18.5 1.71924L15 4.51924V9.62795C13.3794 11.3538 10.6206 11.3538 9 9.62795V4.51924L5.5 1.71924L2 4.51924V21.9999H22V4.51924L18.5 1.71924ZM9 12.1412C10.8541 13.1827 13.1459 13.1827 15 12.1412V19.9999H13V14.9999H11V19.9999H9V12.1412ZM7 19.9999H4V5.48049L5.5 4.28049L7 5.48049V19.9999ZM17 19.9999V5.48049L18.5 4.28049L20 5.48049V19.9999H17Z"
      fill="currentColor"
    />
  </Svg>
);
export { City5Icon };

export default City5Icon;
