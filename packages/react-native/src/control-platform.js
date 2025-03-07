import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ControlPlatformIcon = (props) => (
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
      d="M12 0.855957L22 6.41151V17.5883L12 23.1439L2 17.5883V6.41151L12 0.855957ZM4 8.89612V16.4115L11 20.3004V12.602L4 8.89612ZM13 20.3004L20 16.4115V8.89612L13 12.602V20.3004ZM12 10.8684L19.1196 7.09922L12 3.14387L4.88039 7.09922L12 10.8684Z"
      fill="currentColor"
    />
  </Svg>
);
export { ControlPlatformIcon };

export default ControlPlatformIcon;
