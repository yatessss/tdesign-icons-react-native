import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const AudioIcon = (props) => (
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
      d="M3 1L21 1L21 23L3 23L3 1ZM5 3L5 21L19 21L19 3L5 3ZM10.9961 4.99609H13V7H10.9961V4.99609ZM12 11C10.3431 11 9 12.3431 9 14C9 15.6569 10.3431 17 12 17C13.6569 17 15 15.6569 15 14C15 12.3431 13.6569 11 12 11ZM7 14C7 11.2386 9.23858 9 12 9C14.7614 9 17 11.2386 17 14C17 16.7614 14.7614 19 12 19C9.23858 19 7 16.7614 7 14Z"
      fill="currentColor"
    />
  </Svg>
);
export { AudioIcon };

export default AudioIcon;
