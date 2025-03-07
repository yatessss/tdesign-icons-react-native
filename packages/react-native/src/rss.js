import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const RssIcon = (props) => (
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
      d="M3 3H4C13.3888 3 21 10.6112 21 20V21H19V20C19 11.7157 12.2843 5 4 5H3V3ZM3 10H4C9.52285 10 14 14.4772 14 20V21H12V20C12 15.5817 8.41828 12 4 12H3V10ZM3 19C3 17.8954 3.89543 17 5 17C6.10457 17 7 17.8954 7 19C7 20.1046 6.10457 21 5 21C3.89543 21 3 20.1046 3 19Z"
      fill="currentColor"
    />
  </Svg>
);
export { RssIcon };

export default RssIcon;
