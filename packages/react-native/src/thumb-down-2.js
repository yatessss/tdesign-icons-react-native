import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ThumbDown2Icon = (props) => (
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
      d="M13.4456 22.2358L11.7304 21.6641C10.2196 21.1605 9.20048 19.7465 9.20048 18.154V15.7H5.3317C3.49304 15.7 2.087 14.0611 2.36658 12.2438L3.5512 4.54383C3.77635 3.08034 5.0356 2 6.51631 2H22.0005V13.9H17.1503L13.4456 22.2358ZM17.5005 11.9H20.0005V4H17.5005V11.9ZM15.5005 4H6.51631C6.02274 4 5.60299 4.36011 5.52794 4.84794L4.34333 12.5479C4.25013 13.1537 4.71881 13.7 5.3317 13.7H11.2005V18.154C11.2005 18.883 11.6653 19.5306 12.3554 19.7642L15.5005 12.6878V4Z"
      fill="currentColor"
    />
  </Svg>
);
export { ThumbDown2Icon };

export default ThumbDown2Icon;
