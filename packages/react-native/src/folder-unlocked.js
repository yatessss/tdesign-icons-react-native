import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FolderUnlockedIcon = (props) => (
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
      d="M1 2.5H9.48063L11.4806 5H23V10H21V7H10.5194L8.51937 4.5H3V19H13V21H1V2.5ZM19.5 13.5C18.8096 13.5 18.25 14.0596 18.25 14.75V15.5H23.999V22H14.999V15.5H16.25V14.75C16.25 12.9551 17.7051 11.5 19.5 11.5C20.3936 11.5 21.2045 11.8619 21.791 12.4448L22.5003 13.1498L21.0904 14.5683L20.3811 13.8634C20.1541 13.6377 19.8441 13.5 19.5 13.5ZM16.999 17.5V20H21.999V17.5H16.999Z"
      fill="currentColor"
    />
  </Svg>
);
export { FolderUnlockedIcon };

export default FolderUnlockedIcon;
