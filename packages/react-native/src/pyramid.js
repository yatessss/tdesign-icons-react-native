import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const PyramidIcon = (props) => (
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
      d="M10.9999 2.96045L15.4395 10.8531L16.4999 8.92514L23.6912 22.0002H0.290039L10.9999 2.96045ZM13.2275 11.0002L10.9999 7.03991L8.77223 11.0002H13.2275ZM7.64723 13.0002L3.70973 20.0002H9.99989V13.0002H7.64723ZM11.9999 13.0002V17.107L14.2586 13.0002H11.9999ZM12.6912 20.0002H15.4999V17.0002H14.3412L12.6912 20.0002ZM17.4999 20.0002H20.3086L18.6586 17.0002H17.4999V20.0002ZM17.5586 15.0002L16.4999 13.0752L15.4412 15.0002H17.5586Z"
      fill="currentColor"
    />
  </Svg>
);
export { PyramidIcon };

export default PyramidIcon;
