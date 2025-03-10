import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const City4Icon = (props) => (
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
      d="M18.5 1.71924L15 4.51924V8.38183L12 6.88183L9 8.38183V4.51924L5.5 1.71924L2 4.51924V21.9999H22V4.51924L18.5 1.71924ZM9 10.6179L12 9.1179L15 10.6179V19.9999H13V15.9999H11V19.9999H9V10.6179ZM7 19.9999H4V5.48049L5.5 4.28049L7 5.48049V19.9999ZM17 19.9999V5.48049L18.5 4.28049L20 5.48049V19.9999H17ZM14 11.9999H10V13.9999H14V11.9999Z"
      fill="currentColor"
    />
  </Svg>
);
export { City4Icon };

export default City4Icon;
