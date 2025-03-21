import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SystemRegulationIcon = (props) => (
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
      d="M1 1H23V18H1V1ZM3 3V16H21V3H3ZM9 5V10H7V5H9ZM13 5V8H11V5H13ZM17 5V10H15V5H17ZM13 9V14H11V9H13ZM9 11V14H7V11H9ZM17 11V14H15V11H17ZM3.22222 21H20.7778V23H3.22222V21Z"
      fill="currentColor"
    />
  </Svg>
);
export { SystemRegulationIcon };

export default SystemRegulationIcon;
