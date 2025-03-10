import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const RelationIcon = (props) => (
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
      d="M10.2386 1.6333L12 4.68409L13.7614 1.6333L15.4934 2.6333L13.1547 6.68409L19.1106 17H23V19H20.2653L21.3934 20.9539L19.6613 21.9539L17.9559 19H6.04412L4.33868 21.9539L2.60663 20.9539L3.73472 19H1V17H4.88942L10.8453 6.68409L8.50658 2.6333L10.2386 1.6333ZM12 8.68409L7.19883 17H16.8012L12 8.68409Z"
      fill="currentColor"
    />
  </Svg>
);
export { RelationIcon };

export default RelationIcon;
