import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ViewInArIcon = (props) => (
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
      d="M1.5 1.5H6.5V3.5H3.5V6.5H1.5V1.5ZM17.5 1.5H22.5V6.5H20.5V3.5H17.5V1.5ZM11.9997 3.8453L19.0614 7.92236L19.0619 16.0774L11.9997 20.1547L4.9375 16.0774L4.93856 7.92204L11.9997 3.8453ZM6.93775 10.2312L6.9375 14.9227L10.9998 17.268L11.0001 12.5766L6.93775 10.2312ZM12.9998 17.2679L17.0619 14.9227L17.0617 10.2316L13.0001 12.5766L12.9998 17.2679ZM12.0001 10.8446L16.0614 8.49976L11.9997 6.1547L7.93836 8.4995L12.0001 10.8446ZM3.5 17.5V20.5H6.5V22.5H1.5V17.5H3.5ZM22.5 17.5V22.5H17.5V20.5H20.5V17.5H22.5Z"
      fill="currentColor"
    />
  </Svg>
);
export { ViewInArIcon };

export default ViewInArIcon;
