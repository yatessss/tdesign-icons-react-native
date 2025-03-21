import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FilterOffIcon = (props) => (
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
      d="M3.00015 1.58594L21.4144 20.0002L20.0002 21.4144L14.5002 15.9144V21.0002H9.50015V12.8175L4.93253 6.34675L1.58594 3.00015L3.00015 1.58594ZM11.5002 12.9144V19.0002H12.5002V13.9144L11.5002 12.9144ZM6.54483 3.00015H21.4301L15.3956 11.549L13.7617 10.3956L17.5702 5.00015H9.51012L8.61122 5.01807L6.54483 3.00015Z"
      fill="currentColor"
    />
  </Svg>
);
export { FilterOffIcon };

export default FilterOffIcon;
