import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const MapChatIcon = (props) => (
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
      d="M9 1.84229L15.0744 5.38567L22 2.49999V11H20V5.49999L16 7.16666V9.99999H14V7.07436L10 4.74103V16.9256L11.8677 18.0151L10.8599 19.7426L8.92563 18.6143L2 21.5V5.92562L9 1.84229ZM8 16.8333V4.74103L4 7.07436V18.5L8 16.8333ZM13 13H23V20.4971L17.7075 20.4971L13 22.5174L13 13ZM15 15L15 19.4826L17.2964 18.4971L21 18.4971V15H15Z"
      fill="currentColor"
    />
  </Svg>
);
export { MapChatIcon };

export default MapChatIcon;
