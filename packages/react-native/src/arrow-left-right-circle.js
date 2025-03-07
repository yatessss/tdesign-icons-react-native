import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowLeftRightCircleIcon = (props) => (
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
      d="M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 23C5.92487 23 0.999999 18.0751 1 12C1 5.92487 5.92487 0.999999 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM5.08579 15L9 11.0858L10.4142 12.5L8.91421 14L14 14L14 16L8.91421 16L10.4142 17.5L9 18.9142L5.08579 15ZM10 8L15.0858 8L13.5858 6.5L15 5.08579L18.9142 9L15 12.9142L13.5858 11.5L15.0858 10H10L10 8Z"
      fill="currentColor"
    />
  </Svg>
);
export { ArrowLeftRightCircleIcon };

export default ArrowLeftRightCircleIcon;
