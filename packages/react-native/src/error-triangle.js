import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ErrorTriangleIcon = (props) => (
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
      d="M12 1L23.9511 21.7H0.0488281L12 1ZM3.51293 19.7H20.487L12 5L3.51293 19.7ZM12.9996 9.5V15H10.9996V9.5H12.9996ZM10.9996 16.5H13.0035V18.5039H10.9996V16.5Z"
      fill="currentColor"
    />
  </Svg>
);
export { ErrorTriangleIcon };

export default ErrorTriangleIcon;
