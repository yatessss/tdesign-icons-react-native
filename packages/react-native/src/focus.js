import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FocusIcon = (props) => (
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
      d="M13 1V4.06189C16.6187 4.51314 19.4869 7.38128 19.9381 11H23V13H19.9381C19.4869 16.6187 16.6187 19.4869 13 19.9381V23H11V19.9381C7.38128 19.4869 4.51314 16.6187 4.06189 13H1V11H4.06189C4.51314 7.38128 7.38128 4.51314 11 4.06189V1H13ZM12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12Z"
      fill="currentColor"
    />
  </Svg>
);
export { FocusIcon };

export default FocusIcon;
