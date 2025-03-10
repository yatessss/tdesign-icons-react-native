import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const TextformatColorIcon = (props) => (
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
      d="M19.8131 17.5252L19.4191 16.6061L13.4191 2.60608L13.1594 2H12.5H11.5H10.8406L10.5809 2.60608L4.58086 16.6061L4.18694 17.5252L6.02523 18.3131L6.41914 17.3939L8.2428 13.1387L9.79073 13.1389L11.9995 13.139L14.2083 13.1392L15.7575 13.1393L17.5809 17.3939L17.9748 18.3131L19.8131 17.5252ZM9.7909 11.1389L9.09991 11.1388L12 4.37192L14.9003 11.1393L14.2085 11.1392L11.9997 11.139L9.7909 11.1389ZM19 22H20V20H19H5H4V22H5H19Z"
      fill="currentColor"
    />
  </Svg>
);
export { TextformatColorIcon };

export default TextformatColorIcon;
