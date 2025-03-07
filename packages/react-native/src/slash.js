import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SlashIcon = (props) => (
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
      d="M18.3658 2.97363L7.36584 22.0262L5.63379 21.0262L16.6338 1.97363L18.3658 2.97363Z"
      fill="currentColor"
    />
  </Svg>
);
export { SlashIcon };

export default SlashIcon;
