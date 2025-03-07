import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowUpCircleIcon = (props) => (
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
      d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 6.08579L17.4142 11.5L16 12.9142L13 9.91421V17.5H11V9.91421L8 12.9142L6.58579 11.5L12 6.08579Z"
      fill="currentColor"
    />
  </Svg>
);
export { ArrowUpCircleIcon };

export default ArrowUpCircleIcon;
