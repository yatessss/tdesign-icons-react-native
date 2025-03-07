import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const PageFirstIcon = (props) => (
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
      d="M8.5 5V19H6.5V5H8.5ZM17.6642 6.75L12.4142 12L17.6642 17.25L16.25 18.6642L9.58579 12L16.25 5.33579L17.6642 6.75Z"
      fill="currentColor"
    />
  </Svg>
);
export { PageFirstIcon };

export default PageFirstIcon;
