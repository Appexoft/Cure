import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgDiagnosticsMosquitoCollection = (props: SVGProps<SVGSVGElement>) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    viewBox="0 0 48 48"
    {...props}>
    <Path
      fill="#333"
      fillRule="evenodd"
      d="M23.5 4a1 1 0 0 1 1 1v6.317a2.558 2.558 0 0 1 .66.664l1.7-1.416a1 1 0 0 1 .423-.208l3-.667a1 1 0 1 1 .433 1.953l-2.763.614-1.813 1.511a1.007 1.007 0 0 1-.146.102l.018.067 11.174 1.287.195.618c.25.794.15 1.92-.783 2.81-.894.853-2.406 1.348-4.683 1.348-2.383 0-4.014-.74-5.049-1.802a4.988 4.988 0 0 1-.368-.423 18.658 18.658 0 0 1-.031 1.34c.036.02.07.041.105.065l2.248 1.57a1 1 0 0 1 .242.238l1.21 1.696 2.019.506a1 1 0 0 1-.488 1.94l-2.374-.596a1 1 0 0 1-.57-.389l-1.325-1.854-1.352-.944c-.08.393-.175.762-.284 1.101l1.618 1.355a1 1 0 0 1 .337.971l-.473 2.26.787.787c2.385-.188 4.491-.515 6.162-.933 1.145-.286 2.006-.596 2.591-.888-.555-.277-1.36-.57-2.42-.845v-2.06c3.08.73 5 1.761 5 2.905v3.667c0 .801-.439 1.438-1 1.927v7.714c0 1.055-.795 1.801-1.571 2.286-.83.517-1.963.946-3.275 1.291C31.017 43.581 27.426 44 23.5 44s-7.516-.419-10.155-1.114c-1.311-.346-2.445-.775-3.274-1.292-.776-.485-1.571-1.23-1.571-2.286v-7.713c-.561-.49-1-1.127-1-1.928V26c0-1.144 1.92-2.176 5-2.905v2.06c-1.06.274-1.865.567-2.42.845.585.292 1.446.602 2.591.888 1.76.44 4.005.78 6.549.962l.816-.816-.472-2.26a1 1 0 0 1 .246-.885l1.303-1.403a10.482 10.482 0 0 1-.263-.983l-.948.76-1.345 1.882a1 1 0 0 1-.57.389l-2.374.596a1 1 0 1 1-.487-1.94l2.017-.506 1.212-1.696a1 1 0 0 1 .188-.198l1.957-1.57a.986.986 0 0 1 .037-.028 18.862 18.862 0 0 1-.036-1.417 4.988 4.988 0 0 1-.368.423C19.098 19.259 17.467 20 15.084 20c-2.277 0-3.79-.495-4.683-1.348-.934-.89-1.034-2.016-.783-2.81l.195-.619 11.174-1.286.019-.067c-.051-.03-.1-.063-.147-.102l-1.813-1.511-2.763-.614a1 1 0 0 1 .433-1.953l3 .667a1 1 0 0 1 .424.208l1.7 1.416a2.555 2.555 0 0 1 .66-.664V5a1 1 0 0 1 1-1Zm-1.39 20.35-.483.521.477 2.283a1 1 0 0 1-.195.826 62.465 62.465 0 0 0 3.589-.012 1 1 0 0 1-.186-.814l.46-2.202-.812-.68c-.33.375-.817.728-1.46.728-.599 0-1.061-.305-1.39-.65Zm13.26-7.322c-.04.058-.09.117-.152.177-.354.338-1.248.795-3.303.795-1.95 0-3.026-.593-3.616-1.198a2.928 2.928 0 0 1-.476-.643l7.546.869Zm-23.74 0c.039.058.088.117.15.177.355.338 1.25.795 3.304.795 1.95 0 3.026-.593 3.616-1.198.202-.207.358-.427.476-.643l-7.546.869ZM19.922 29.9a1.002 1.002 0 0 1-.989-.065c-4.046-.301-7.422-.991-9.433-1.897v1.729c0 .012.024.277.712.711.638.402 1.627.801 2.94 1.151 2.608.696 6.267 1.138 10.348 1.138s7.74-.442 10.349-1.138c1.312-.35 2.301-.749 2.939-1.15.688-.435.712-.7.712-.712v-1.729c-1.932.87-5.127 1.542-8.965 1.86-.317.24-.743.266-1.084.08A62.55 62.55 0 0 1 23.5 30c-1.23 0-2.428-.035-3.578-.1Zm17.708-4.363c.001 0-.004.008-.02.024a.093.093 0 0 1 .02-.024Zm-28.26 0s.009.008.02.024c-.016-.016-.021-.024-.02-.024Zm24.994 7.925c.78-.208 1.5-.444 2.136-.707v6.55c-.007.023-.065.24-.63.591-.587.367-1.504.733-2.725 1.056-2.43.64-5.84 1.048-9.645 1.048-3.806 0-7.216-.408-9.645-1.048-1.221-.323-2.138-.69-2.726-1.056-.564-.351-.622-.568-.628-.59v-.002l-.001-6.55c.636.264 1.356.5 2.136.708 2.82.752 6.66 1.205 10.864 1.205 4.203 0 8.044-.453 10.864-1.205ZM22.5 18c0-1.58.214-2.967.534-3.926.159-.477.326-.795.466-.975.139.18.306.498.465.975.32.959.535 2.347.535 3.926 0 1.58-.215 2.968-.535 3.926-.159.477-.326.795-.465.975-.14-.18-.307-.498-.466-.975-.32-.958-.534-2.347-.534-3.926Zm.881 5.024a.008.008 0 0 0-.002.002l.007-.004a.043.043 0 0 0-.005.002Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgDiagnosticsMosquitoCollection;
