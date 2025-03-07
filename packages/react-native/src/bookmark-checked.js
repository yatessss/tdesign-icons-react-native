import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const BookmarkCheckedIcon = (props) => (
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
      d="M22.5961 2.93936L16.9392 8.59621L13.4037 5.06068L14.8179 3.64647L16.9392 5.76779L21.1819 1.52515L22.5961 2.93936ZM4 2.99992H12V4.99992H6V19.0567L12 14.771L18 19.0567V9.99992H20V22.9431L12 17.2288L4 22.9431V2.99992Z"
      fill="currentColor"
    />
  </Svg>
);
export { BookmarkCheckedIcon };

export default BookmarkCheckedIcon;
