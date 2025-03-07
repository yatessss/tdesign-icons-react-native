import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const DataCheckedIcon = (props) => (
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
      d="M2 2H22V14H20V13H4L4 20.0004H12.5V22.0004H2L2 2ZM4 11H20V4H4V11ZM5.99805 6.5H8.00195V8.50391H5.99805V6.5ZM5.99805 15.5H8.00195V17.5039H5.99805V15.5ZM23.5961 16.9393L17.9392 22.5962L14.4037 19.0606L15.8179 17.6464L17.9392 19.7677L22.1819 15.5251L23.5961 16.9393Z"
      fill="currentColor"
    />
  </Svg>
);
export { DataCheckedIcon };

export default DataCheckedIcon;
