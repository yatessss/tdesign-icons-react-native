import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const AlignVerticalIcon = (props) => (
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
      d="M13 6.58579V4.82609V3.78261V1V0H11V1V3.78261V4.82609V6.58579L9.70711 5.29289L9 4.58579L7.58579 6L8.29289 6.70711L11.2929 9.70711L12 10.4142L12.7071 9.70711L15.7071 6.70711L16.4142 6L15 4.58579L14.2929 5.29289L13 6.58579ZM21 13H20L4 13H3V11H4L20 11H21V13ZM12 13.5858L12.7071 14.2929L15.7071 17.2929L16.4142 18L15 19.4142L14.2929 18.7071L13 17.4142V19.1739V20.2174V23V24H11V23V20.2174V19.1739V17.4142L9.70711 18.7071L9 19.4142L7.58579 18L8.29289 17.2929L11.2929 14.2929L12 13.5858Z"
      fill="currentColor"
    />
  </Svg>
);
export { AlignVerticalIcon };

export default AlignVerticalIcon;
