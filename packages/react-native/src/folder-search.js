import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FolderSearchIcon = (props) => (
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
      d="M1 2.5H9.48063L11.4806 5H23V12.5H21V7H10.5194L8.51937 4.5H3V19H11.5V21H1V2.5ZM17.25 14.5C18.7688 14.5 20 15.7312 20 17.25C20 18.0085 19.6929 18.6952 19.1963 19.1927C19.1936 19.1955 19.1908 19.1983 19.188 19.2011C18.6908 19.6949 18.0061 20 17.25 20C15.7312 20 14.5 18.7688 14.5 17.25C14.5 15.7312 15.7312 14.5 17.25 14.5ZM21.2419 19.8254C21.7216 19.0834 22 18.1992 22 17.25C22 14.6266 19.8734 12.5 17.25 12.5C14.6266 12.5 12.5 14.6266 12.5 17.25C12.5 19.8734 14.6266 22 17.25 22C18.2004 22 19.0857 21.7209 19.8282 21.2401L21.4983 22.9142L22.9142 21.5017L21.2419 19.8254Z"
      fill="currentColor"
    />
  </Svg>
);
export { FolderSearchIcon };

export default FolderSearchIcon;
