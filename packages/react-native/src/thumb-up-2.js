import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ThumbUp2Icon = (props) => (
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
      d="M10.5549 1.76416L12.27 2.33587C13.7809 2.83949 14.8 4.2534 14.8 5.846V8.29995H18.6688C20.5074 8.29995 21.9135 9.93884 21.6339 11.7561L20.4493 19.4561C20.2241 20.9196 18.9649 21.9999 17.4842 21.9999H2V10.0999H6.85013L10.5549 1.76416ZM6.5 12.0999H4V19.9999H6.5V12.0999ZM8.5 19.9999H17.4842C17.9777 19.9999 18.3975 19.6398 18.4725 19.152L19.6572 11.452C19.7503 10.8462 19.2817 10.2999 18.6688 10.2999H12.8V5.846C12.8 5.1169 12.3351 4.4693 11.6451 4.23575L8.5 11.3122V19.9999Z"
      fill="currentColor"
    />
  </Svg>
);
export { ThumbUp2Icon };

export default ThumbUp2Icon;
