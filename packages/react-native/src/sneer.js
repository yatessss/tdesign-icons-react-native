import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const SneerIcon = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color="rgba(0, 0, 0, 0.9)"
    {...props}
  >
    <G id="\xE5\x86\xB7\xE7\xAC\x91-sneer">
      <G id="Union">
        <Path
          d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM6 9H10V11H6V9ZM14 9H18V11H14V9ZM16.7177 13.7808L16.4684 14.7493C16.1994 15.7946 15.6749 16.6446 14.8547 17.217C14.0487 17.7795 13.063 18 12 18H11V16H12C12.8008 16 13.3431 15.8331 13.7101 15.5769C14.0629 15.3307 14.3566 14.9306 14.5316 14.2507L14.7808 13.2823L16.7177 13.7808Z"
          fill="currentColor"
        />
      </G>
    </G>
  </Svg>
);
export { SneerIcon };

export default SneerIcon;
