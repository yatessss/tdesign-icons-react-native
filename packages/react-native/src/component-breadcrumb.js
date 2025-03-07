import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ComponentBreadcrumbIcon = (props) => (
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
      d="M2 6.50017L2 17.5002L9.91421 17.5002L15.4142 12.0002L9.91421 6.50017L2 6.50017ZM4 8.50017L9.08578 8.50017L12.5858 12.0002L9.08579 15.5002L4 15.5002V8.50017ZM14.5858 7.50015L19.0858 12.0002L14.5858 16.5001L16 17.9144L21.9142 12.0002L16 6.08594L14.5858 7.50015Z"
      fill="currentColor"
    />
  </Svg>
);
export { ComponentBreadcrumbIcon };

export default ComponentBreadcrumbIcon;
