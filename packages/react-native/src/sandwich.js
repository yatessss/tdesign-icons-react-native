import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const SandwichIcon = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color="rgba(0, 0, 0, 0.9)"
    {...props}
  >
    <G id="\xE4\xB8\x89\xE6\x98\x8E\xE6\xB2\xBB_sandwich">
      <Path
        id="Union"
        d="M13.8 2.51531C14.6382 2.05807 15.6828 2.25718 16.2941 2.99074L21 8.63779V21.9998H3V8.40621L13.8 2.51531ZM5 9.99984V13.9998H19V9.99984H5ZM17.865 7.99984L14.7577 4.27111L7.92166 7.99984H17.865ZM19 15.9998H5V19.9998H19V15.9998Z"
        fill="currentColor"
      />
    </G>
  </Svg>
);
export { SandwichIcon };

export default SandwichIcon;
