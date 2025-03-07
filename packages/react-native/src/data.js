import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const DataIcon = (props) => (
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
      d="M2 2H22V22H2V2ZM4 4V11H5.99805V10.998H8.00195V11H20V4H4ZM20 13H8.00195V13.002H5.99805V13H4V20H20V13ZM5.99805 6.5H8.00195V8.50391H5.99805V6.5ZM5.99805 15.5H8.00195V17.5039H5.99805V15.5Z"
      fill="currentColor"
    />
  </Svg>
);
export { DataIcon };

export default DataIcon;
