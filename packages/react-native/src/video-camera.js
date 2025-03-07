import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const VideoCameraIcon = (props) => (
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
      d="M0 4H17V8.43381L24 4.23381V19.7662L17 15.5662V20H0V4ZM15 6H2V18H15V6ZM17 13.2338L22 16.2338V7.76619L17 10.7662V13.2338Z"
      fill="currentColor"
    />
  </Svg>
);
export { VideoCameraIcon };

export default VideoCameraIcon;
