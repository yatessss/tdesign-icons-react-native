import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ForestIcon = (props) => (
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
      d="M6.99997 0.213867L12 13.2139L17 0.213867L23.456 17.0001L18 16.9998V22H16V16.9997H7.99998V22H5.99998V16.9998L0.543945 17.0001L6.99997 0.213867ZM7.99998 14.9997L10.544 14.9996L7.99998 8.38526V14.9997ZM5.99998 8.38542L3.45602 14.9999L5.99998 14.9998V8.38542ZM13.456 14.9996L16 14.9997V8.38526L13.456 14.9996ZM18 8.38542V14.9998L20.5439 14.9999L18 8.38542Z"
      fill="currentColor"
    />
  </Svg>
);
export { ForestIcon };

export default ForestIcon;
