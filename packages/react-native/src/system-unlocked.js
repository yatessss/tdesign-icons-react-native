import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SystemUnlockedIcon = (props) => (
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
      d="M1 1H23V11H21V3H3V16H13V18H1V1ZM19.5015 14.5C18.8111 14.5 18.2515 15.0596 18.2515 15.75V16.5H24V23H15V16.5H16.2515V15.75C16.2515 13.9551 17.7065 12.5 19.5015 12.5C20.395 12.5 21.206 12.8619 21.7925 13.4448L22.5017 14.1498L21.0919 15.5683L20.3826 14.8634C20.1555 14.6377 19.8456 14.5 19.5015 14.5ZM17 18.5V21H22V18.5H17ZM2.25 21H13V23H2.25V21Z"
      fill="currentColor"
    />
  </Svg>
);
export { SystemUnlockedIcon };

export default SystemUnlockedIcon;
