import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const CalmIcon = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color="rgba(0, 0, 0, 0.9)"
    {...props}
  >
    <G id="\xE5\xB9\xB3\xE9\x9D\x99-calm">
      <G id="Union">
        <Path
          d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM9 8V12H7V8H9ZM17 8V12H15V8H17ZM10.5 14H16V16H10.5V14Z"
          fill="currentColor"
        />
      </G>
    </G>
  </Svg>
);
export { CalmIcon };

export default CalmIcon;
