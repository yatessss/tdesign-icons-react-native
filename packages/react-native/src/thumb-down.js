import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ThumbDownIcon = (props) => (
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
      d="M10.8786 22.6174L12.1576 22.4043C14.0863 22.0828 15.5 20.4141 15.5 18.4587V16.0001H20.8195C22.0554 16.0001 22.9955 14.8903 22.7923 13.6713L21.1257 3.67128C20.9649 2.7069 20.1306 2.00008 19.1529 2.00008H7V13.1979L10.8786 22.6174ZM12.1131 20.3626L9 12.8023V4.00008H19.1529L20.8195 14.0001H13.5V18.4587C13.5 19.3375 12.9289 20.1005 12.1131 20.3626ZM4 14.0001V2.00008H2V14.0001H4Z"
      fill="currentColor"
    />
  </Svg>
);
export { ThumbDownIcon };

export default ThumbDownIcon;
