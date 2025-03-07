import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const LettersVIcon = (props) => (
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
      d="M15 4L15 14.2732L12 17.9247L9 14.2732L9.00001 4L7.00001 4L7 14.2732C7 14.7362 7.16069 15.185 7.45465 15.5428L11.2273 20.1348H12.7727L16.5453 15.5428C16.8393 15.185 17 14.7362 17 14.2732L17 4L15 4Z"
      fill="currentColor"
    />
  </Svg>
);
export { LettersVIcon };

export default LettersVIcon;
