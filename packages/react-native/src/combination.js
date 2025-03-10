import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CombinationIcon = (props) => (
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
      d="M12 1.14795L18.1597 10.75H5.8403L12 1.14795ZM12 4.852L9.49945 8.74998H14.5006L12 4.852ZM2 13H11V22H2V13ZM4 15V20H9V15H4ZM17.5 15C16.1193 15 15 16.1193 15 17.5C15 18.8807 16.1193 20 17.5 20C18.8807 20 20 18.8807 20 17.5C20 16.1193 18.8807 15 17.5 15ZM13 17.5C13 15.0147 15.0147 13 17.5 13C19.9853 13 22 15.0147 22 17.5C22 19.9853 19.9853 22 17.5 22C15.0147 22 13 19.9853 13 17.5Z"
      fill="currentColor"
    />
  </Svg>
);
export { CombinationIcon };

export default CombinationIcon;
