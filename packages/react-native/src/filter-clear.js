import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FilterClearIcon = (props) => (
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
      d="M2.57031 3H21.4302L14.5002 12.8174V21H9.50023V12.8174L2.57031 3ZM6.43015 5L11.5002 12.1826V19H12.5002V12.1826L17.5703 5H6.43015ZM17.8791 13.4647L20.0005 15.586L22.1218 13.4647L23.536 14.8789L21.4147 17.0002L23.536 19.1215L22.1218 20.5358L20.0005 18.4144L17.8791 20.5358L16.4649 19.1215L18.5862 17.0002L16.4649 14.8789L17.8791 13.4647Z"
      fill="currentColor"
    />
  </Svg>
);
export { FilterClearIcon };

export default FilterClearIcon;
