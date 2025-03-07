import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const MilkIcon = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color="rgba(0, 0, 0, 0.9)"
    {...props}
  >
    <G id="\xE7\x89\x9B\xE5\xA5\xB6_milk">
      <Path
        id="Union"
        d="M17.85 1H6.15V4.59026L4 9.49026V23H20V9.49026L17.85 4.59026V1ZM16.9322 7.47622L18 9.90974V21H16.05V9.87786L16.9322 7.47622ZM14.05 10.7V21H6V10.7H14.05ZM6.5308 8.7L7.80325 5.8H15.4173L14.352 8.7H6.5308ZM8.15 3.8V3H15.85V3.8H8.15ZM13 13H11.5743L9.9984 14.5838L8.41536 13H7V19H9V16.4141L10.0016 17.4162L11 16.4127V19H13V13Z"
        fill="currentColor"
      />
    </G>
  </Svg>
);
export { MilkIcon };

export default MilkIcon;
