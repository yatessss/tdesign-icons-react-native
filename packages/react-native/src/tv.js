import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const TvIcon = (props) => (
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
      d="M1 2L23.0001 2L23.0001 19H17.0001V17H21.0001L21.0001 4L3.00013 4L3.00099 17L7.00006 17L7.00007 19L1.00112 19L1 2ZM12 15.5872L16.2421 19.8292L18.6618 22.2441H15.8286L14.8293 21.2448L12.0003 18.4159L9.17327 21.244L8.17313 22.2441H5.33987L7.75878 19.8301L12 15.5872Z"
      fill="currentColor"
    />
  </Svg>
);
export { TvIcon };

export default TvIcon;
