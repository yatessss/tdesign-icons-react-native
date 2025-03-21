import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Table2Icon = (props) => (
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
      d="M1.5 3.5H22.5V20.5H1.5V3.5ZM3.5 5.5V8.5H11V5.5H3.5ZM13 5.5V8.5H20.5V5.5H13ZM20.5 10.5H13V13.5H20.5V10.5ZM20.5 15.5H13V18.5H20.5V15.5ZM11 18.5V15.5H3.5V18.5H11ZM3.5 13.5H11V10.5H3.5V13.5Z"
      fill="currentColor"
    />
  </Svg>
);
export { Table2Icon };

export default Table2Icon;
