import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Flag1Icon = (props) => (
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
      d="M3 2H11.4142L13.4142 4H21.4277L19.0641 10.5L21.4277 17H12.5858L10.5858 15H5V22.5H3V2ZM5 13H11.4142L13.4142 15H18.5723L17.2996 11.5H12.5858L10.5858 9.5H5V13ZM5 7.5H11.4142L13.4142 9.5H17.2996L18.5723 6H12.5858L10.5858 4H5V7.5Z"
      fill="currentColor"
    />
  </Svg>
);
export { Flag1Icon };

export default Flag1Icon;
