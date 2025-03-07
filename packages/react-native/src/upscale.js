import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const UpscaleIcon = (props) => (
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
      d="M15.056 1.99414L21.9662 2.03364L22.0057 8.94385L20.0057 8.95529L19.9856 5.42847L14.9586 10.4555L13.5444 9.04125L18.5713 4.01427L15.0446 3.99411L15.056 1.99414ZM2 1.99984H12V3.99984H4V9.99984H2V1.99984ZM2 11.9998H6V13.9998H4V15.9998H2V11.9998ZM8 11.9998H12V15.9998H10V13.9998H8V11.9998ZM22 11.9998V21.9998H14V19.9998H20V11.9998H22ZM4 17.9998V19.9998H6V21.9998H2V17.9998H4ZM12 17.9998V21.9998H8V19.9998H10V17.9998H12Z"
      fill="currentColor"
    />
  </Svg>
);
export { UpscaleIcon };

export default UpscaleIcon;
