import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const MapRulerIcon = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color="rgba(0, 0, 0, 0.9)"
    {...props}
  >
    <G clipPath="url(#clip0_8726_8450)">
      <Path
        d="M15.8574 0.21582L23.6687 8.02709L7.86108 23.8347L0.0498047 16.0234L15.8574 0.21582ZM15.8574 3.04425L13.6733 5.22838L15.2755 6.83059L13.8613 8.2448L12.2591 6.64259L10.0749 8.82673L12.4768 11.2286L11.0625 12.6428L8.66071 10.2409L6.47658 12.4251L8.07878 14.0273L6.66457 15.4415L5.06236 13.8393L2.87823 16.0234L7.86108 21.0063L20.8402 8.02709L15.8574 3.04425Z"
        fill="currentColor"
      />
    </G>
  </Svg>
);
export { MapRulerIcon };

export default MapRulerIcon;
