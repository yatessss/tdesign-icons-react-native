import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ExpandVerticalIcon = (props) => (
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
      d="M20 3.5L4 3.5L4 1.5L20 1.5V3.5ZM12 4.08579L16.9142 9L15.5 10.4142L13 7.91421L13 16.0858L15.5 13.5858L16.9142 15L12 19.9142L7.08579 15L8.5 13.5858L11 16.0858L11 7.91422L8.5 10.4142L7.08579 9L12 4.08579ZM20 22.5L4 22.5L4 20.5L20 20.5V22.5Z"
      fill="currentColor"
    />
  </Svg>
);
export { ExpandVerticalIcon };

export default ExpandVerticalIcon;
