import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ChartBubbleIcon = (props) => (
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
      d="M4 2V20H22V22H2V2H4ZM16 5C15.4477 5 15 5.44772 15 6C15 6.55228 15.4477 7 16 7C16.5523 7 17 6.55228 17 6C17 5.44772 16.5523 5 16 5ZM13 6C13 4.34315 14.3431 3 16 3C17.6569 3 19 4.34315 19 6C19 7.65685 17.6569 9 16 9C14.3431 9 13 7.65685 13 6ZM10 12C8.89543 12 8 12.8954 8 14C8 15.1046 8.89543 16 10 16C11.1046 16 12 15.1046 12 14C12 12.8954 11.1046 12 10 12ZM6 14C6 11.7909 7.79086 10 10 10C12.2091 10 14 11.7909 14 14C14 16.2091 12.2091 18 10 18C7.79086 18 6 16.2091 6 14ZM17 14C17 12.8954 17.8954 12 19 12C20.1046 12 21 12.8954 21 14C21 15.1046 20.1046 16 19 16C17.8954 16 17 15.1046 17 14Z"
      fill="currentColor"
    />
  </Svg>
);
export { ChartBubbleIcon };

export default ChartBubbleIcon;
