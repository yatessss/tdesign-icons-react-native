import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const TagIcon = (props) => (
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
      d="M10.878 23.0201L0.978516 13.1206L11.1002 3.01525L21 2.99805L20.9999 12.9145L10.878 23.0201ZM10.8792 20.1928L18.9999 12.0851L19 5.00153L11.9291 5.01382L3.80809 13.1217L10.8792 20.1928ZM14.9961 9.00361V6.99979H16.9999L17.0001 9.00378L14.9961 9.00361Z"
      fill="currentColor"
    />
  </Svg>
);
export { TagIcon };

export default TagIcon;
