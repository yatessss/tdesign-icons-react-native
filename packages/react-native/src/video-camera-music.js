import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const VideoCameraMusicIcon = (props) => (
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
      d="M24 4.23382V19.7232L17 15.7232V20L0 20L6.9938e-07 4L17 4V8.43382L24 4.23382ZM17 10.7662V13.4197L22 16.2768V7.76619L17 10.7662ZM15 6L2 6L2 18H15L15 6ZM12.5 9L10.5 9L10.5 14C10.5 15.6569 9.15686 17 7.5 17C5.84315 17 4.5 15.6569 4.5 14C4.5 12.3431 5.84315 11 7.5 11C7.85064 11 8.18722 11.0602 8.5 11.1707L8.5 7H12.5V9ZM8.5 14C8.5 13.4477 8.05229 13 7.5 13C6.94772 13 6.5 13.4477 6.5 14C6.5 14.5523 6.94772 15 7.5 15C8.05229 15 8.5 14.5523 8.5 14Z"
      fill="currentColor"
    />
  </Svg>
);
export { VideoCameraMusicIcon };

export default VideoCameraMusicIcon;
