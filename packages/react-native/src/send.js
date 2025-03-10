import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const SendIcon = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color="rgba(0, 0, 0, 0.9)"
    {...props}
  >
    <G clipPath="url(#clip0_8726_7232)">
      <Path
        d="M0.291992 1.66455L24.0029 12.0001L0.291992 22.3356L3.93982 12.0001L0.291992 1.66455ZM5.70779 13.0001L3.70856 18.6646L18.9977 12.0001L3.70856 5.33557L5.70779 11.0001H11.0003V13.0001H5.70779Z"
        fill="currentColor"
      />
    </G>
  </Svg>
);
export { SendIcon };

export default SendIcon;
