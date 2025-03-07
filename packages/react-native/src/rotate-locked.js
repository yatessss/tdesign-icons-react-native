import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const RotateLockedIcon = (props) => (
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
      d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C15.689 21 18.8618 18.7803 20.2516 15.5996L22.0843 16.4004C20.3878 20.2833 16.5123 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12V14L19.4 11.3L20.6 9.7L20.7282 9.79616C19.7453 5.891 16.2102 3 12 3ZM12 8.5C12.6904 8.5 13.25 9.05964 13.25 9.75V10.5H10.75V9.75C10.75 9.05964 11.3096 8.5 12 8.5ZM15.25 10.5V9.75C15.25 7.95508 13.7949 6.5 12 6.5C10.2051 6.5 8.75 7.95507 8.75 9.75V10.5H7.49854V17H16.4985V10.5H15.25ZM14.4985 12.5V15H9.49854V12.5H14.4985Z"
      fill="currentColor"
    />
  </Svg>
);
export { RotateLockedIcon };

export default RotateLockedIcon;
