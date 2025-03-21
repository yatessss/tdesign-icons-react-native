import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowUpDownCircleIcon = (props) => (
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
      d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM23 12C23 18.0751 18.0751 23 12 23C5.92487 23 0.999999 18.0751 1 12C1 5.92487 5.92487 0.999999 12 1C18.0751 1 23 5.92487 23 12ZM15 18.9142L11.0858 15L12.5 13.5858L14 15.0858L14 10H16L16 15.0858L17.5 13.5858L18.9142 15L15 18.9142ZM8 14L8 8.91421L6.5 10.4142L5.08579 9L9 5.08579L12.9142 9L11.5 10.4142L10 8.91421L10 14H8Z"
      fill="currentColor"
    />
  </Svg>
);
export { ArrowUpDownCircleIcon };

export default ArrowUpDownCircleIcon;
