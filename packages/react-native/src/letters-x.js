import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const LettersXIcon = (props) => (
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
      d="M16.4948 8.44853C16.8202 8.08243 17 7.60963 17 7.11979L17 4L15 4.00001L15 7.1198L12 10.4948L9.00001 7.1198L9 4L7 4.00001L7.00001 7.11981C7.00002 7.60963 7.17977 8.08243 7.50519 8.44853L10.662 12L7.50519 15.5515C7.17977 15.9176 7.00001 16.3904 7.00001 16.8802L7.00001 20L9.00001 20L9.00001 16.8802L12 13.5052L15 16.8802L15 20L17 20V16.8802C17 16.3904 16.8202 15.9176 16.4948 15.5515L13.3379 12L16.4948 8.44853Z"
      fill="currentColor"
    />
  </Svg>
);
export { LettersXIcon };

export default LettersXIcon;
