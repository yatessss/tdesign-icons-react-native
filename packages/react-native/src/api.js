import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const ApiIcon = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color="rgba(0, 0, 0, 0.9)"
    {...props}
  >
    <G clipPath="url(#clip0_8726_7197)">
      <Path
        d="M0.585938 12L5.00015 7.58581L6.41437 9.00002L3.41436 12L6.41437 15L5.00015 16.4142L0.585938 12ZM7.58593 5.00003L12.0001 0.585815L16.4144 5.00003L15.0001 6.41424L12.0001 3.41424L9.00015 6.41425L7.58593 5.00003ZM9.00015 17.5858L12.0001 20.5858L15.0002 17.5858L16.4144 19L12.0001 23.4142L7.58593 19L9.00015 17.5858ZM10.9982 13.002V10.9981H13.0021V13.002H10.9982ZM17.5859 15L20.5859 12L17.5859 9.00003L19.0002 7.58582L23.4144 12L19.0002 16.4142L17.5859 15Z"
        fill="currentColor"
      />
    </G>
  </Svg>
);
export { ApiIcon };

export default ApiIcon;
