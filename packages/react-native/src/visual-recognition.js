import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const VisualRecognitionIcon = (props) => (
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
      d="M2 2H22V12H20V4H4V13.5858L9 8.58579L13.9142 13.5L12.5 14.9142L9 11.4142L4 16.4142V20H17V22H2V2ZM15.5469 7C14.9946 7 14.5469 7.44772 14.5469 8C14.5469 8.55228 14.9946 9 15.5469 9C16.0992 9 16.5469 8.55228 16.5469 8C16.5469 7.44772 16.0992 7 15.5469 7ZM12.5469 8C12.5469 6.34315 13.89 5 15.5469 5C17.2037 5 18.5469 6.34315 18.5469 8C18.5469 9.65685 17.2037 11 15.5469 11C13.89 11 12.5469 9.65685 12.5469 8ZM16 14H24V16H21V23H19V16H16V14Z"
      fill="currentColor"
    />
  </Svg>
);
export { VisualRecognitionIcon };

export default VisualRecognitionIcon;
