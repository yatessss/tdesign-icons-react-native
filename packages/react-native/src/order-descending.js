import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const OrderDescendingIcon = (props) => (
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
      d="M2 4H3H14H15V6H14H3H2V4ZM2 11H3H14H15V13H14H3H2V11ZM3 18H2V20H3H12H13V18H12H3ZM19 21.4142L19.7071 20.7071L22.7071 17.7071L23.4142 17L22 15.5858L21.2929 16.2929L20 17.5858V15.8261V14.7826V5V4H18V5V14.7826V15.8261V17.5858L16.7071 16.2929L16 15.5858L14.5858 17L15.2929 17.7071L18.2929 20.7071L19 21.4142Z"
      fill="currentColor"
    />
  </Svg>
);
export { OrderDescendingIcon };

export default OrderDescendingIcon;
