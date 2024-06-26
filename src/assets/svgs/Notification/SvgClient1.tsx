import * as React from 'react';
import Svg, { Path, Mask, G, SvgProps } from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={40} height={40} viewBox="0 0 40 40" fill="none" {...props}>
      <Path
        d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
        fill="#FFCF5C"
      />
      {/**@ts-ignore */}
      <Mask
        id="prefix__a"
        maskUnits={'userSpaceOnUse'}
        x={0}
        y={0}
        width={40}
        height={40}>
        <Path
          d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
          fill="#fff"
        />
      </Mask>
      {/**@ts-ignore */}
      <G mask="url(#prefix__a)">
        <Path
          d="M29.23 21.009c.13-1.279-.476-2.409-1.36-2.53-.884-.122-1.702.814-1.835 2.1-.133 1.288.475 2.406 1.356 2.528.882.122 1.705-.823 1.838-2.098zM10.771 21.009c-.13-1.279.475-2.409 1.357-2.53.88-.122 1.704.814 1.837 2.092.134 1.278-.475 2.406-1.356 2.528-.881.121-1.705-.815-1.838-2.09z"
          fill="#DEA078"
        />
        <Path
          d="M11.954 22.994c.204.096.431.133.655.105.87-.122 1.49-1.253 1.357-2.528-.134-1.275-.954-2.215-1.838-2.093-.19.029-.369.101-.525.212v.362a21.552 21.552 0 00.35 3.942zM26.035 20.58c-.133 1.275.475 2.405 1.356 2.527.223.029.45-.008.653-.104.243-1.303.364-2.625.362-3.95v-.363a1.203 1.203 0 00-.525-.212c-.893-.121-1.713.815-1.846 2.102z"
          fill="#D39675"
        />
        <Path fill="#DEA078" d="M16.913 27.675h6.174v6.768h-6.174z" />
        <Path
          d="M16.913 29.925c1.102.49 2.319.87 3.087.87.768 0 1.985-.392 3.087-.87v-2.25h-6.174v2.25z"
          fill="#D39675"
        />
        <Path
          d="M29.676 33.794c-1.192-1.374-2.876-1.855-4.54-2.266a8.325 8.325 0 00-2.029-.25c0 1.33-1.382 2.409-3.087 2.409-1.704 0-3.087-1.078-3.087-2.409-.683 0-1.365.083-2.028.25-1.664.411-3.351.892-4.54 2.266-.89 1.032-2.437 9.647-2.437 9.647H32.15s-1.586-8.615-2.475-9.647z"
          fill="#3D2011"
        />
        <Path
          d="M20 9.414c-2.997 0-7.736 1.705-7.736 9.69 0 4.609 1.501 7.63 2.156 8.464.603.771 3.992 2.409 5.58 2.409s4.977-1.638 5.58-2.409c.655-.835 2.156-3.855 2.156-8.464 0-7.985-4.739-9.69-7.736-9.69z"
          fill="#EEBE8D"
        />
        <Path
          d="M28.78 13.333a9.187 9.187 0 00-2.16-3.362l.902.14a.29.29 0 00.255-.508c-2.928-2.887-4.878-2.357-4.878-2.357l1.466-.652a.294.294 0 00-.098-.58c-5.009-.37-7.165 1.125-7.165 1.125l.58-.988a.29.29 0 00-.375-.426c-4.263 1.76-4.591 4.2-4.516 5.237-1.658 1.371-.96 5.864-.504 9.51l.65.789v-5.873a2.342 2.342 0 012.51-2.318c1.611.115 3.58.39 4.536 1.063.959-.684 2.916-.96 4.539-1.075a2.342 2.342 0 012.51 2.319v5.884l.704-.788c.264-2.1.522-5.557.29-6.943l.357.171a.29.29 0 00.397-.368z"
          fill="#A06D4A"
        />
        <Path
          d="M27.032 15.388a2.342 2.342 0 00-2.51-2.318c-1.403.098-3.07.321-4.113.82a.991.991 0 01-.85 0c-1.043-.499-2.712-.722-4.112-.82a2.342 2.342 0 00-2.51 2.318v.514a2.342 2.342 0 012.51-2.32c1.449.102 3.174.337 4.208.87a.73.73 0 00.658 0c1.035-.53 2.763-.765 4.209-.87a2.342 2.342 0 012.51 2.32v-.514zM20.817 23.429c0 .452-.365.516-.817.516-.452 0-.817-.064-.817-.516s.365-1.878.817-1.878c.452 0 .817 1.426.817 1.878z"
          fill="#DEA078"
        />
        <Path
          d="M16.53 21.26a.887.887 0 100-1.773.887.887 0 000 1.774z"
          fill="#573319"
        />
        <Path
          d="M15.122 19.093a.432.432 0 01-.197-.05.414.414 0 01-.166-.559 1.994 1.994 0 011.763-1 2.046 2.046 0 011.501.635.412.412 0 01-.6.56 1.229 1.229 0 00-.901-.375 1.189 1.189 0 00-1.047.58.412.412 0 01-.353.209z"
          fill="#A06D4A"
        />
        <Path
          d="M23.47 21.26a.887.887 0 100-1.773.887.887 0 000 1.774z"
          fill="#573319"
        />
        <Path
          d="M24.878 19.093a.411.411 0 00.36-.609 1.985 1.985 0 00-1.76-1 2.046 2.046 0 00-1.501.635.412.412 0 10.6.56c.236-.244.562-.38.901-.375.428-.009.828.213 1.047.58a.412.412 0 00.353.209z"
          fill="#A06D4A"
        />
        <Path d="M17.284 25.217a2.727 2.727 0 005.432 0h-5.432z" fill="#fff" />
        <Path
          d="M17.354 25.617h5.293c.033-.13.056-.265.07-.4h-5.433c.013.135.036.27.07.4z"
          fill="#E8E8E8"
        />
      </G>
    </Svg>
  );
}

const SvgClient1 = React.memo(SvgComponent);
export default SvgClient1;
