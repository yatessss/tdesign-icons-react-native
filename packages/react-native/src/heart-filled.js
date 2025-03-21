import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const HeartFilledIcon = (props) => (
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
      d="M12.0022 4.81816C14.4485 2.66879 18.1771 2.7618 20.5125 5.09718C22.9448 7.52943 22.9448 11.4729 20.5125 13.9051L15.2875 19.1302L15.2867 19.1295L12.0009 22.4153L4.72154 15.136L3.49007 13.9036C1.05808 11.4714 1.05791 7.52784 3.49008 5.09567C5.82601 2.75974 9.55583 2.66724 12.0022 4.81816Z"
      fill="currentColor"
    />
  </Svg>
);
export { HeartFilledIcon };

export default HeartFilledIcon;
