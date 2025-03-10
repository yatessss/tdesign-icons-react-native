import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Highlight1Icon = (props) => (
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
      d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12.0003 7C10.1344 7 8.50583 8.02163 7.64569 9.54082L7.15299 10.411L5.41259 9.42563L5.90528 8.55543C7.10595 6.4348 9.38494 5 12.0003 5H13.0003V7H12.0003ZM7.00397 11.1329L7.00385 13.2091L5.00385 13.209L5.00397 11.1328L7.00397 11.1329Z"
      fill="currentColor"
    />
  </Svg>
);
export { Highlight1Icon };

export default Highlight1Icon;
