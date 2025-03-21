import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const FlipSmilingFaceIcon = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color="rgba(0, 0, 0, 0.9)"
    {...props}
  >
    <G id="\xE7\xBF\xBB\xE8\xBD\xAC\xE7\xAC\x91\xE8\x84\xB8-flip-smiling-face">
      <G id="Union">
        <Path
          d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM7.66955 8.49927C8.53257 7.00738 10.1481 6 12 6C13.852 6 15.4675 7.00738 16.3305 8.49927L16.8312 9.36488L15.1 10.3663L14.5993 9.50072C14.0791 8.60141 13.1092 8 12 8C10.8909 8 9.92099 8.60141 9.40076 9.50072L8.90004 10.3663L7.16883 9.36488L7.66955 8.49927ZM9 12V16L7 16V12L9 12ZM17 12L17 16H15V12H17Z"
          fill="currentColor"
        />
      </G>
    </G>
  </Svg>
);
export { FlipSmilingFaceIcon };

export default FlipSmilingFaceIcon;
