import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowLeftDownCircleIcon = (props) => (
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
      d="M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM7.81806 16.1813L7.81806 8.52448H9.81806V12.7671L15.182 7.40316L16.5962 8.81738L11.2323 14.1813H15.4749V16.1813H7.81806Z"
      fill="currentColor"
    />
  </Svg>
);
export { ArrowLeftDownCircleIcon };

export default ArrowLeftDownCircleIcon;
