import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const MosqueIcon = (props) => (
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
      d="M13.0039 2.00195L13.0018 3.08326C15.5134 3.50542 17.4956 5.48809 17.917 8H22V10H21V22H3V10H2V8H6.08296C6.50458 5.4869 8.48844 3.50353 11.0018 3.08266L11.0039 1.99805L13.0039 2.00195ZM8.12602 8H15.874C15.4299 6.27477 13.8638 5 12 5C10.1362 5 8.57006 6.27477 8.12602 8ZM5 10V20H8V14H16V20H19L19 10H5ZM14 20V16H10V20H14Z"
      fill="currentColor"
    />
  </Svg>
);
export { MosqueIcon };

export default MosqueIcon;
