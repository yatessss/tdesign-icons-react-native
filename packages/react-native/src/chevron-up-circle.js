import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ChevronUpCircleIcon = (props) => (
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
      d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 8.08579L17.4142 13.5L16 14.9142L12 10.9142L8 14.9142L6.58579 13.5L12 8.08579Z"
      fill="currentColor"
    />
  </Svg>
);
export { ChevronUpCircleIcon };

export default ChevronUpCircleIcon;
