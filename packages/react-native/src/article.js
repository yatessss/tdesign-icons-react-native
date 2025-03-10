import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ArticleIcon = (props) => (
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
      d="M2.5 2L21.5 2L21.5 22L2.5 22L2.5 2ZM4.5 4L4.5 20L19.5 20L19.5 4L4.5 4ZM7 7L17 7V9L7 9V7ZM7 11L17 11V13L7 13V11ZM7 15L14 15V17H7L7 15Z"
      fill="currentColor"
    />
  </Svg>
);
export { ArticleIcon };

export default ArticleIcon;
