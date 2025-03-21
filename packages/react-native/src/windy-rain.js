import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const WindyRainIcon = (props) => (
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
      d="M13 5C12.4477 5 12 5.44772 12 6C12 6.55228 12.4477 7 13 7H18V9H13C11.3431 9 10 7.65685 10 6C10 4.34315 11.3431 3 13 3H17V5H13ZM5.5 8C4.67157 8 4 8.67157 4 9.5C4 10.3284 4.67157 11 5.5 11H12V13H5.5C3.567 13 2 11.433 2 9.5C2 7.567 3.567 6 5.5 6H8V8H5.5ZM20 6.99609H22.0039V9H20V6.99609ZM20 10.9961H22.0039V13H20V10.9961ZM14 11H18V13H14V11ZM16 14.9961H18.0039V17H16V14.9961ZM5 18C5 16.3431 6.34315 15 8 15H9V17H8C7.44772 17 7 17.4477 7 18C7 18.5523 7.44772 19 8 19H12.5V21H8C6.34315 21 5 19.6569 5 18ZM11 15H14V17H11V15Z"
      fill="currentColor"
    />
  </Svg>
);
export { WindyRainIcon };

export default WindyRainIcon;
