import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const PenBrushIcon = (props) => (
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
      d="M1.99902 22.0003H5.62161C6.41726 22.0003 7.18032 21.6842 7.74293 21.1216L22.5311 6.33349L17.6658 1.46826L2.8777 16.2564C2.31509 16.819 1.99902 17.5821 1.99902 18.3777L1.99902 22.0003ZM3.99902 20.0003L3.99902 18.3777C3.99902 18.1125 4.10438 17.8581 4.29192 17.6706L6.45004 15.5125L8.48684 17.5493L6.32872 19.7074C6.14118 19.8949 5.88683 20.0003 5.62161 20.0003H3.99902ZM9.90105 16.1351L7.86425 14.0983L17.6658 4.29669L19.7026 6.33349L9.90105 16.1351Z"
      fill="currentColor"
    />
  </Svg>
);
export { PenBrushIcon };

export default PenBrushIcon;
