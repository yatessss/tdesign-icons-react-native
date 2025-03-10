import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ComponentDividerVerticalIcon = (props) => (
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
      d="M5 2L19 2V9L5 9L5 2ZM7 4L7 7L17 7V4L7 4ZM2 11L22 11V13L2 13L2 11ZM5 15L19 15V22L5 22L5 15ZM7 17V20L17 20L17 17H7Z"
      fill="currentColor"
    />
  </Svg>
);
export { ComponentDividerVerticalIcon };

export default ComponentDividerVerticalIcon;
