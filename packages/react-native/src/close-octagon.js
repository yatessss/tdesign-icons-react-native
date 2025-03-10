import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CloseOctagonIcon = (props) => (
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
      d="M16.3492 1.49963L22.5 7.65039V16.3489L16.3492 22.4996H7.65076L1.5 16.3489L1.5 7.65039L7.65076 1.49963L16.3492 1.49963ZM15.5208 3.49963L8.47918 3.49963L3.5 8.47882L3.5 15.5204L8.47918 20.4996H15.5208L20.5 15.5204L20.5 8.47882L15.5208 3.49963ZM16.5959 8.81799L13.4142 11.9996L16.5959 15.1813L15.1816 16.5955L12 13.4138L8.81768 16.5962L7.40347 15.182L10.5858 11.9996L7.40347 8.81731L8.81768 7.4031L12 10.5854L15.1816 7.40378L16.5959 8.81799Z"
      fill="currentColor"
    />
  </Svg>
);
export { CloseOctagonIcon };

export default CloseOctagonIcon;
