import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const AddIcon = (props) => (
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
      d="M13 4V11L20 11V13L13 13V20H11L11 13H4L4 11L11 11L11 4L13 4Z"
      fill="currentColor"
    />
  </Svg>
);
export { AddIcon };

export default AddIcon;
