import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const VideoCamera2Icon = (props) => (
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
      d="M12.5 3C14.433 3 16 4.567 16 6.5C16 8.433 14.433 10 12.5 10C10.567 10 9 8.433 9 6.5C9 4.567 10.567 3 12.5 3ZM16.7428 10C17.5282 9.04906 18 7.82963 18 6.5C18 3.46243 15.5376 1 12.5 1C10.0845 1 8.03263 2.55718 7.29358 4.72247C6.64419 4.26719 5.8533 4 5 4C2.79086 4 1 5.79086 1 8C1 8.72858 1.19479 9.41166 1.53513 10H1L1 22H18V19.477L23 21.477L23 10.523L18 12.523V10H16.7428ZM18 14.677L21 13.477L21 18.523L18 17.323V14.677ZM16 12V20H3L3 12L5 12C5.00002 12 5.00103 12 5.00105 12L16 12ZM5.00007 10C5.00004 10 5.00009 10 5.00007 10C3.8955 10 3 9.10457 3 8C3 6.89543 3.89543 6 5 6C6.10457 6 7 6.89543 7 8C7 9.10455 6.10461 9.99996 5.00007 10Z"
      fill="currentColor"
    />
  </Svg>
);
export { VideoCamera2Icon };

export default VideoCamera2Icon;
