import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CursorIcon = (props) => (
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
      d="M3.1084 3.11353L19.9718 9.0385L15.6534 12.123L21.3595 17.8291L17.8239 21.3646L12.1179 15.6586L9.03337 19.9769L3.1084 3.11353ZM6.37651 6.38164L9.64393 15.6812L11.8627 12.5749L17.8239 18.5362L18.531 17.8291L12.5698 11.8678L15.6761 9.64905L6.37651 6.38164Z"
      fill="currentColor"
    />
  </Svg>
);
export { CursorIcon };

export default CursorIcon;
