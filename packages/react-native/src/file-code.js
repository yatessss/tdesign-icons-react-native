import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FileCodeIcon = (props) => (
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
      d="M3.00098 1.00073H15.4152L21.001 6.58652V13.0007H19.001V9.00073H13.001V3.00073H5.00098V21.0007H11.001V23.0007H3.00098V1.00073ZM15.001 3.41495V7.00073H18.5868L15.001 3.41495ZM23.6644 15.2561L20.888 18.0045L23.6644 20.7528L22.2574 22.1742L18.0451 18.0045L22.2574 13.8347L23.6644 15.2561ZM13.0002 20.9999H17.5002V22.9999H13.0002V20.9999Z"
      fill="currentColor"
    />
  </Svg>
);
export { FileCodeIcon };

export default FileCodeIcon;
