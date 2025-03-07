import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const NotificationCircleIcon = (props) => (
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
      d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM23 12C23 18.0751 18.0751 23 12 23C5.92487 23 0.999999 18.0751 1 12C1 5.92487 5.92487 0.999999 12 1C18.0751 1 23 5.92487 23 12ZM13.7324 17C13.3866 17.5978 12.7403 18 12 18C11.2597 18 10.6134 17.5978 10.2676 17H6L6 14.2639L7 12.2639V10C7 7.23858 9.23858 5 12 5C14.7614 5 17 7.23858 17 10V12.2639L18 14.2639V17H13.7324ZM8 15H16V14.7361L15 12.7361V10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10V12.7361L8 14.7361V15Z"
      fill="currentColor"
    />
  </Svg>
);
export { NotificationCircleIcon };

export default NotificationCircleIcon;
