import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={97} height={24} viewBox="0 0 97 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M60.59 23.607h4.328V0H60.59v23.607zM18.492 1.18h-4.48v9.35H4.48V1.18H0v22.427h4.48V14h9.532v9.607h4.48V1.18zm34.623 13.77c0 1.591-.473 2.84-1.418 3.751-.946.91-2.047 1.365-3.304 1.365-1.256 0-2.358-.46-3.303-1.38-.945-.92-1.418-2.176-1.418-3.766 0-1.59.468-2.834 1.402-3.734.935-.9 2.036-1.35 3.304-1.35 1.267 0 2.373.456 3.319 1.365.945.91 1.418 2.16 1.418 3.75zm-14.164-.03c0 2.645.797 4.82 2.392 6.524C42.937 23.148 44.933 24 47.33 24c2.397 0 4.27-1.068 5.618-3.207v2.953h4.495V6.156h-4.495v2.73c-1.284-1.989-3.146-2.984-5.586-2.984-2.44 0-4.452.841-6.035 2.524-1.584 1.683-2.376 3.848-2.376 6.493zm37.18-5.084c1.114 0 2.066.358 2.854 1.073.789.716 1.214 1.67 1.277 2.862H72c.147-1.192.594-2.146 1.34-2.862.747-.715 1.676-1.073 2.791-1.073zm-6.415 11.671C71.341 23.17 73.447 24 76.035 24c2.095 0 3.88-.529 5.356-1.587 1.475-1.059 2.47-2.424 2.983-4.097H79.5c-.75 1.27-1.904 1.906-3.464 1.906-1.155 0-2.107-.35-2.855-1.048-.748-.698-1.176-1.62-1.283-2.763h12.958c.085-.528.129-1.1.129-1.714 0-2.667-.835-4.8-2.502-6.398-1.669-1.598-3.802-2.397-6.4-2.397-2.597 0-4.714.82-6.35 2.46-1.636 1.641-2.453 3.827-2.453 6.557 0 2.73.812 4.927 2.437 6.588zM91.528 6.16v3.156c1.212-2.275 2.965-3.413 5.259-3.413v4.637H95.65c-1.364 0-2.392.338-3.084 1.014-.693.677-1.039 1.841-1.039 3.495V24h-4.577V6.16h4.577zM36.623 7.796c-5.537-3.601-7.295 3.224-7.295 3.224-.802-6.496-5.133-5.449-5.133-5.449-5.044.447-3.52 7.04-3.52 7.04C22.2 19.791 31.878 24 31.878 24c-1.257-2.936.823-5.707 2.846-7.474 6.408-4.76 1.899-8.731 1.899-8.731z"
        fill="#4B66EA"
      />
    </Svg>
  );
}

const SvgHealer = React.memo(SvgComponent);
export default SvgHealer;
