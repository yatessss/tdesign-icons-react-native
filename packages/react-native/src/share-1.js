import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Share1Icon = (props) => (
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
      d="M11.5001 1.85059L23.5526 12L11.5001 22.1495V15.9233C7.30565 16.1238 4.4268 17.6231 2.31385 20.5813L0.519531 19.8039C1.04297 17.1867 2.10079 14.5092 3.99754 12.3415C5.75937 10.328 8.20695 8.79947 11.5001 8.15506L11.5001 1.85059ZM13.5001 6.14948L13.5001 9.86733L12.6415 9.98998C9.37204 10.4571 7.09103 11.8433 5.50269 13.6585C4.79919 14.4625 4.22297 15.3609 3.75752 16.3174C6.09576 14.6658 8.97868 13.9 12.5001 13.9H13.5001V17.8506L20.4476 12L13.5001 6.14948Z"
      fill="currentColor"
    />
  </Svg>
);
export { Share1Icon };

export default Share1Icon;
