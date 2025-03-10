import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const TrendingDownIcon = (props) => (
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
      d="M2.08594 7.49991L8.50016 13.9141L12.5002 9.91415L17.5859 14.9999L13.5002 14.9999V16.9999H21.0002V9.49991H19.0002V13.5857L12.5002 7.08572L8.50016 11.0857L3.50015 6.08569L2.08594 7.49991Z"
      fill="currentColor"
    />
  </Svg>
);
export { TrendingDownIcon };

export default TrendingDownIcon;
