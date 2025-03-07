import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const MinusCircleFilledIcon = (props) => (
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
      d="M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM17.5 13V11L6.5 11V13L17.5 13Z"
      fill="currentColor"
    />
  </Svg>
);
export { MinusCircleFilledIcon };

export default MinusCircleFilledIcon;
