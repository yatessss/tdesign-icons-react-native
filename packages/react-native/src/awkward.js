import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const AwkwardIcon = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color="rgba(0, 0, 0, 0.9)"
    {...props}
  >
    <G id="\xE5\xB0\xB4\xE5\xB0\xAC-awkward">
      <G id="Union">
        <Path
          d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM6 9H10V11H6V9ZM14 9H18V11H14V9ZM16 12V14.6667H14V12H16ZM19 12V15H17V12H19Z"
          fill="currentColor"
        />
      </G>
    </G>
  </Svg>
);
export { AwkwardIcon };

export default AwkwardIcon;
