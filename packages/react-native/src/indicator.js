import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const IndicatorIcon = (props) => (
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
      d="M10.3529 1V4H13.6471V1H15.6471V4H17.5376L21.6335 7L17.5376 10H15.6471V12.1111H22V18.1111H15.6471V23H13.6471V18.1111H10.3529V23H8.35294V18.1111H6.46243L2.36645 15.1111L6.46243 12.1111H8.35294V10H2V4H8.35294V1H10.3529ZM4 6V8H16.8835L18.2488 7L16.8835 6H4ZM13.6471 10H10.3529V12.1111H13.6471V10ZM7.11652 14.1111L5.75119 15.1111L7.11652 16.1111H20V14.1111H7.11652Z"
      fill="currentColor"
    />
  </Svg>
);
export { IndicatorIcon };

export default IndicatorIcon;
