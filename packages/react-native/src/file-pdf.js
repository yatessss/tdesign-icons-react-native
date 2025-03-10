import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FilePdfIcon = (props) => (
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
      d="M3 1H15.4142L21 6.58579V11H19V9H13V3H5V21H21V23H3V1ZM15 3.41421V7H18.5858L15 3.41421ZM6 12H9.71428C10.4244 12 11 12.5756 11 13.2857V15.7143C11 16.4244 10.4244 17 9.71428 17H8V20H6V12ZM8 15H9V14H8V15ZM11.5 12H15.2143C15.9244 12 16.5 12.5756 16.5 13.2857V18.7143C16.5 19.4244 15.9244 20 15.2143 20H11.5V12ZM13.5 14V18H14.5V14H13.5ZM17 13.2857C17 12.5756 17.5756 12 18.2857 12H21.6667V14H19V15H21.6667V17H19V20H17V13.2857Z"
      fill="currentColor"
    />
  </Svg>
);
export { FilePdfIcon };

export default FilePdfIcon;
