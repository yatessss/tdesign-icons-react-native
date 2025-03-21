import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Numbers21Icon = (props) => (
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
      d="M7 8C7 5.23858 9.23858 3 12 3H13V3.10002C15.2822 3.56329 17 5.58104 17 8V8.06512C17 9.59037 16.3127 11.0344 15.1289 11.9962L9 16.976V18H17V20H7V16.976C7 16.3737 7.27139 15.8035 7.73881 15.4237L13.8677 10.444C14.5841 9.86197 15 8.98812 15 8.06512V8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8V9H7V8Z"
      fill="currentColor"
    />
  </Svg>
);
export { Numbers21Icon };

export default Numbers21Icon;
