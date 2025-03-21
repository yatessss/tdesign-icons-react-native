import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ImageAddIcon = (props) => (
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
      d="M2 2H22V12H20V4H4V13.5858L9 8.58579L14.4142 14L13 15.4142L9 11.4142L4 16.4142V20H12V22H2V2ZM15.5469 7C14.9946 7 14.5469 7.44772 14.5469 8C14.5469 8.55228 14.9946 9 15.5469 9C16.0992 9 16.5469 8.55228 16.5469 8C16.5469 7.44772 16.0992 7 15.5469 7ZM12.5469 8C12.5469 6.34315 13.89 5 15.5469 5C17.2037 5 18.5469 6.34315 18.5469 8C18.5469 9.65685 17.2037 11 15.5469 11C13.89 11 12.5469 9.65685 12.5469 8ZM20 14V18H24V20H20V24H18V20H14V18H18V14H20Z"
      fill="currentColor"
    />
  </Svg>
);
export { ImageAddIcon };

export default ImageAddIcon;
