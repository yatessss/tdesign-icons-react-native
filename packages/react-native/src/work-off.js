import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const WorkOffIcon = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color="rgba(0, 0, 0, 0.9)"
    {...props}
  >
    <G clipPath="url(#clip0_8726_7418)">
      <Path
        d="M2.00015 0.585693L23.4144 21.9999L22.0002 23.4141L20.0859 21.4999H2.00015V6.49991H5.08594L0.585938 1.99991L2.00015 0.585693ZM7.08594 8.49991H4.00015V19.4999H18.0859L7.08594 8.49991ZM7.50581 2.49991H16.5002V6.50186L22.0001 6.5006L22.0035 17.9185L20.0001 15.9151V8.50116L12.5869 8.50186L10.5835 6.49844L14.5002 6.50186V4.49991H9.50017L9.5002 6.12211L7.49685 4.07781L7.50581 2.49991Z"
        fill="currentColor"
      />
    </G>
  </Svg>
);
export { WorkOffIcon };

export default WorkOffIcon;
