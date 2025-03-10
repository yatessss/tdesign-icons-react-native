import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CloseCircleIcon = (props) => (
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
      d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM23 12C23 18.0751 18.0751 23 12 23C5.92487 23 0.999999 18.0751 1 12C1 5.92487 5.92487 0.999999 12 1C18.0751 1 23 5.92487 23 12ZM7.40347 15.1823L10.5858 12L7.40347 8.81768L8.81768 7.40347L12 10.5858L15.1816 7.40415L16.5959 8.81836L13.4142 12L16.5959 15.1816L15.1816 16.5959L12 13.4142L8.81768 16.5965L7.40347 15.1823Z"
      fill="currentColor"
    />
  </Svg>
);
export { CloseCircleIcon };

export default CloseCircleIcon;
