import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const AppIcon = (props) => (
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
      d="M2 2H11V11H2V2ZM4 4V9H9V4H4ZM17.5 4C16.1193 4 15 5.11929 15 6.5C15 7.88071 16.1193 9 17.5 9C18.8807 9 20 7.88071 20 6.5C20 5.11929 18.8807 4 17.5 4ZM13 6.5C13 4.01472 15.0147 2 17.5 2C19.9853 2 22 4.01472 22 6.5C22 8.98528 19.9853 11 17.5 11C15.0147 11 13 8.98528 13 6.5ZM2 13H11V22H2V13ZM4 15V20H9V15H4ZM13 13H22V22H13V13ZM15 15V20H20V15H15Z"
      fill="currentColor"
    />
  </Svg>
);
export { AppIcon };

export default AppIcon;
