import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const SleepIcon = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color="rgba(0, 0, 0, 0.9)"
    {...props}
  >
    <G id="\xE7\x9D\xA1\xE8\xA7\x89-sleep">
      <G id="Union">
        <Path
          d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM8 8.5V9.5C8 9.77614 8.22386 10 8.5 10C8.77614 10 9 9.77614 9 9.5V8.5H11V9.5C11 10.8807 9.88071 12 8.5 12C7.11929 12 6 10.8807 6 9.5V8.5H8ZM15 8.5V9.5C15 9.77614 15.2239 10 15.5 10C15.7761 10 16 9.77614 16 9.5V8.5H18V9.5C18 10.8807 16.8807 12 15.5 12C14.1193 12 13 10.8807 13 9.5V8.5H15ZM11 14H13.0039V16.0039H11V14Z"
          fill="currentColor"
        />
      </G>
    </G>
  </Svg>
);
export { SleepIcon };

export default SleepIcon;
