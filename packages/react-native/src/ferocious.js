import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const FerociousIcon = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color="rgba(0, 0, 0, 0.9)"
    {...props}
  >
    <G id="\xE9\xBE\x87\xE7\x89\x99\xE5\x92\xA7\xE5\x98\xB4-ferocious">
      <G id="Union">
        <Path
          d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM6.76874 8.13397L10.2328 10.134L9.23284 11.866L5.76874 9.86603L6.76874 8.13397ZM18.2328 9.86603L14.7687 11.866L13.7687 10.134L17.2328 8.13397L18.2328 9.86603ZM16 12.7915V17.0998L7.90519 16.3288L7.81289 14.351L16 12.7915Z"
          fill="currentColor"
        />
      </G>
    </G>
  </Svg>
);
export { FerociousIcon };

export default FerociousIcon;
