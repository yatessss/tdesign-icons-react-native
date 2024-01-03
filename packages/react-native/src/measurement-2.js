import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Measurement2Icon = (props) => (
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
      d="M18.5 1.58594L22.9142 6.00016L21.5 7.41437L19.5 5.41436L19.5 18.5859L21.5 16.5859L22.9142 18.0001L18.5 22.4144L14.0858 18.0002L15.5 16.5859L17.5 18.5859L17.5 5.41437L15.5 7.41436L14.0858 6.00015L18.5 1.58594ZM2 2.00015H12V22.0002H2V2.00015ZM4 4.00015V20.0002H10V4.00015H4Z"
      fill="currentColor"
    />
  </Svg>
);
export { Measurement2Icon };

export default Measurement2Icon;
