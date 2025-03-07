import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const SendCancelIcon = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color="rgba(0, 0, 0, 0.9)"
    {...props}
  >
    <G clipPath="url(#clip0_8726_7234)">
      <Path
        d="M0.291992 1.66455L24.0029 12.0001L18.5457 14.3788L17.7465 12.5455L18.9977 12.0001L3.70856 5.33557L5.70779 11.0001H11.0003V13.0001H5.70779L3.70856 18.6646L12.2674 14.9338L13.0666 16.7672L0.291992 22.3356L3.93982 12.0001L0.291992 1.66455ZM23.0819 15.9954L20.25 18.8462L23.0713 21.6675L21.6571 23.0817L18.8381 20.2628L16.0203 23.0806L14.6061 21.6664L17.4239 18.8485L14.5861 16.0107L16.0003 14.5965L18.8358 17.432L21.663 14.5859L23.0819 15.9954Z"
        fill="currentColor"
      />
    </G>
  </Svg>
);
export { SendCancelIcon };

export default SendCancelIcon;
