import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SunFallIcon = (props) => (
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
      d="M13 3V6H11V3H13ZM20.4853 6.92848L18.364 9.0498L16.9497 7.63559L19.0711 5.51426L20.4853 6.92848ZM4.9289 5.51431L7.05022 7.63563L5.63601 9.04984L3.51469 6.92852L4.9289 5.51431ZM12 10C9.79086 10 8 11.7909 8 14V15H6V14C6 10.6863 8.68629 8 12 8C15.3137 8 18 10.6863 18 14V15H16V14C16 11.7909 14.2091 10 12 10ZM1 13H4V15H1V13ZM20 13H23V15H20V13ZM1 17H9.30278L12 18.7982L14.6972 17H23V19H15.3028L12 21.2019L8.69722 19H1V17Z"
      fill="currentColor"
    />
  </Svg>
);
export { SunFallIcon };

export default SunFallIcon;
