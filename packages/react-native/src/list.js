import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ListIcon = (props) => (
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
      d="M2 19.0039H4.00391V17H2V19.0039ZM7 19H22V17H7V19ZM2 13.0039H4.00391V11H2V13.0039ZM7 13H22V11H7V13ZM2 7.00391H4.00391V5H2V7.00391ZM7 7H22V5H7V7Z"
      fill="currentColor"
    />
  </Svg>
);
export { ListIcon };

export default ListIcon;
