import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const InkIcon = (props) => (
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
      d="M22 12.8963V21H2L2 12.8963L4.19556 8.71429L6.2 8.71429L6.2 3L17.8 3V8.71429H19.8044L22 12.8963ZM15.8 8.71429V5L8.2 5V8.71429H15.8ZM20 13.3894L18.5956 10.7143L5.40443 10.7143L4 13.3894L4 19L20 19V13.3894Z"
      fill="currentColor"
    />
  </Svg>
);
export { InkIcon };

export default InkIcon;
