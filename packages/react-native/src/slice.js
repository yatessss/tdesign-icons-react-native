import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SliceIcon = (props) => (
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
      d="M0.185547 18.9616L8.15951 21.6452L12.8168 16.9879L14.0022 18.1733L22.0591 10.1142C23.8575 8.3153 23.8573 5.3992 22.0587 3.60057C20.2597 1.8016 17.3429 1.80179 15.5442 3.601L0.185547 18.9616ZM10.3164 11.659L16.9586 5.01502C17.9763 3.99704 19.6266 3.99693 20.6444 5.01478C21.6621 6.03244 21.6622 7.68235 20.6447 8.70014L14.002 15.3446L10.3164 11.659ZM11.4026 15.5737L7.62215 19.3541L3.88063 18.0949L8.90225 13.0733L11.4026 15.5737Z"
      fill="currentColor"
    />
  </Svg>
);
export { SliceIcon };

export default SliceIcon;
