import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const LettersRIcon = (props) => (
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
      d="M7 4H15.5C16.3284 4 17 4.67157 17 5.5V11.5C17 12.3284 16.3284 13 15.5 13H12.7299L16.9689 16.5868C17.3057 16.8718 17.5 17.2907 17.5 17.7319V20H15.5V17.9638L9.63369 13H9V20H7V4ZM9 11H15V6H9V11Z"
      fill="currentColor"
    />
  </Svg>
);
export { LettersRIcon };

export default LettersRIcon;
