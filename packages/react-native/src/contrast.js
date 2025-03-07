import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ContrastIcon = (props) => (
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
      d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM11 4.5H12C16.1421 4.5 19.5 7.85786 19.5 12C19.5 16.1421 16.1421 19.5 12 19.5H11V4.5ZM13 6.59069V17.4093C15.5601 16.9391 17.5 14.6961 17.5 12C17.5 9.30393 15.5601 7.06094 13 6.59069Z"
      fill="currentColor"
    />
  </Svg>
);
export { ContrastIcon };

export default ContrastIcon;
