import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const CpuIcon = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color="rgba(0, 0, 0, 0.9)"
    {...props}
  >
    <G clipPath="url(#clip0_8726_7691)">
      <Path
        d="M9 0.5V3H15V0.5H17V3H21V7H23.5V9H21V15H23.5V17H21V21H17V23.5H15V21H9V23.5H7V21H3V17H0.5V15H3V9H0.5V7H3V3H7V0.5H9ZM5 5V19H19V5H5ZM8 8H16V16H8V8ZM10 10V14H14V10H10Z"
        fill="currentColor"
      />
    </G>
  </Svg>
);
export { CpuIcon };

export default CpuIcon;
