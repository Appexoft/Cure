import * as React from 'react';
import Svg, { Path, G, SvgProps } from 'react-native-svg';
import { heightScreen, widthScreen } from '../../../utils/dimensions';

function SvgComponent(props: SvgProps) {
  const height = heightScreen / 3;
  const width = widthScreen / 1.2;
  return (
    <Svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      {...props}>
      <Path
        d="M110.76 373.06c27.68 19.62 54.48 31 87.5 38.77S265 429.6 298.64 425.49c35.52-4.34 64.36-4.26 103.56-34.31 28.39-21.78 48-64.79 47.64-100.58a90.85 90.85 0 00-97.95-89.67c-16.29 1.28-32.57 6.93-48.62 3.93-21-3.92-36.54-21.72-47.36-40.12s-13.07-51.59-29.15-65.63c-30.9-27-86.91-30.6-116-13.16-31.58 19-62.47 55.06-70.06 91.1 0 0-25.93 127.95 70.06 196.01z"
        fill="#e0e0e0"
      />
      <Path
        d="M409.92 253.39l12.38-15s3.11-20.31 2.68-23.17a96.51 96.51 0 00-3.42-11.22 1.76 1.76 0 011.39-2.32c2.25-.37 5.93 0 8.79 5.43 2.62 5 4 11.74 4.66 16.13a3.79 3.79 0 004.88 3 128.44 128.44 0 0117.38-4.21c3.39-.39 7.21 2.84 7.95 5.26.56 1.82-2.29 5.3-2.29 5.3s2.95 1.16 4 3.25c.14.27.27.53.38.79a5.3 5.3 0 01-.64 5.22l-.78 1s3.6.61 4.23 2.58a12 12 0 01.33 4.44l-2.95 3.72a5.61 5.61 0 012 3c.35 1.83-4.13 6.9-4.13 6.9l-22.71 8.62-8 7.63z"
        fill="#b78876"
      />
      <Path
        d="M466.28 233.15a2.2 2.2 0 01-.47.28l-1.41.71-5.21 2.54-7.76 3.7c-1.47.67-3 1.48-4.66 2.08a6 6 0 01-5.46-.41 4.13 4.13 0 01-1.55-2.44 5.79 5.79 0 01.1-2.78 7.82 7.82 0 013.08-4.12 30.79 30.79 0 014-2.35l3.54-1.87 5.14-2.67 1.41-.71a2.19 2.19 0 01.51-.21 2.36 2.36 0 01-.46.3l-1.36.79-5.06 2.82-3.51 1.93a31.79 31.79 0 00-3.9 2.35 7.45 7.45 0 00-2.88 3.87 4.31 4.31 0 001.27 4.66 4.43 4.43 0 002.45.78 7.28 7.28 0 002.54-.42c1.63-.57 3.14-1.38 4.62-2l7.8-3.6 5.28-2.39 1.45-.63a2.11 2.11 0 01.5-.21z"
        fill="#aa6550"
      />
      <Path
        d="M468.75 243.51a6.12 6.12 0 01-1.09.58c-.72.34-1.76.81-3.07 1.36-2.6 1.11-6.25 2.54-10.34 3.93a28.68 28.68 0 01-3.05.91 5.93 5.93 0 01-3-.06 4.62 4.62 0 01-3.13-3.82 4.51 4.51 0 01.95-3.25 3.89 3.89 0 01.66-.65c.17-.12.27-.17.28-.16s-.34.3-.78.93a4.55 4.55 0 00-.75 3.08 4.28 4.28 0 002.91 3.41 5.55 5.55 0 002.78 0 29.5 29.5 0 003-.91c4.09-1.38 7.74-2.75 10.37-3.77l3.13-1.21a5.93 5.93 0 011.13-.37z"
        fill="#aa6550"
      />
      <Path
        d="M469.41 253.25a4.61 4.61 0 01-1.08.36l-3 .8c-2.54.65-6.05 1.51-9.93 2.43a27.43 27.43 0 01-2.89.59 5.16 5.16 0 01-2.79-.35 3 3 0 01-1.73-1.9 3.32 3.32 0 01.14-2.22 4.63 4.63 0 012.15-2.29 2.8 2.8 0 011.06-.43s-.36.2-1 .6a4.74 4.74 0 00-1.91 2.25 3.07 3.07 0 00-.07 2 2.62 2.62 0 001.52 1.58 4.83 4.83 0 002.53.29 27.12 27.12 0 002.83-.6c3.88-.92 7.41-1.72 10-2.28l3-.64a5.72 5.72 0 011.17-.19z"
        fill="#aa6550"
      />
      <Path
        d="M469.06 262.09a20.48 20.48 0 01-3.36.17h-10.42a8.85 8.85 0 01-2.19-.19 3.1 3.1 0 01-1.76-1.08 2.07 2.07 0 01-.38-1.77 3 3 0 011.67-1.87 1.58 1.58 0 01.9-.19c0 .05-.32.09-.81.37a2.85 2.85 0 00-1.4 1.78 1.69 1.69 0 00.36 1.42 2.88 2.88 0 001.53.88 10 10 0 002.09.14h2.31c3.16 0 6 .08 8.1.14a22.26 22.26 0 013.36.2zM448.19 253.46a29.24 29.24 0 00-5.58-1.77 28.73 28.73 0 00-5.85-.07 12.86 12.86 0 0111.43 1.84z"
        fill="#aa6550"
      />
      <Path
        d="M337.28 302.73L413 248.26l26.92 30.85-59.26 61.08c-26.48 23.95-35.75 30-79.65 5l-27.86-16 10.29 127.07h-126c-13.84-.44 18-35.16 15.82-35.16l-27.64-93.31-42.76 28.74 40.53 31.69-15 34.71-69.3-32.03c-25.12-16.71-21.75-49.26-.32-70.5 38.6-38.25 68.47-66.08 101.47-71.72 17-5.11 27-6 27-6 26.56-.38 28.54-.29 42.77.38a60.54 60.54 0 018.25 1 96.61 96.61 0 0142.91 17.66z"
        fill="#03a9f4"
      />
      <Path
        d="M339.1 328.2a3.73 3.73 0 01-.58-.92 22 22 0 01-1.24-2.69 28.1 28.1 0 01-1.27-4.21 32.81 32.81 0 01-.68-5.34 31.73 31.73 0 01.3-5.38 28.43 28.43 0 011-4.29 21.82 21.82 0 011-2.77 4.27 4.27 0 01.51-1c.1 0-.52 1.45-1.17 3.83a34.86 34.86 0 00-.83 4.25 34.38 34.38 0 00-.25 5.29 35.8 35.8 0 00.62 5.26 34.3 34.3 0 001.14 4.17c.82 2.39 1.54 3.75 1.45 3.8z"
        fill="#263238"
      />
      <Path d="M270.45 358.52a41 41 0 00-12.14-62.3" fill="#03a9f4" />
      <Path
        d="M258.27 298.19a2.37 2.37 0 01.54.32c.33.23.86.55 1.47 1a42.39 42.39 0 015 4.36A62.4 62.4 0 01277.36 322a28.07 28.07 0 012.64 11.77 32.35 32.35 0 01-1.56 9.71 49.24 49.24 0 01-2.4 6.18l-.81 1.61a3.36 3.36 0 01-.31.55 2.57 2.57 0 01.22-.59c.18-.43.42-1 .71-1.65a60.3 60.3 0 002.24-6.2 33.55 33.55 0 001.43-9.61 28 28 0 00-2.66-11.52 65.4 65.4 0 00-11.86-18.1 49.41 49.41 0 00-4.86-4.45c-.6-.5-1.1-.84-1.41-1.11a3 3 0 01-.46-.4zM230.31 334.07a1.11 1.11 0 010 .43c0 .28 0 .69-.08 1.22a24.44 24.44 0 01-.88 4.41 26.45 26.45 0 01-21.19 18.75 24 24 0 01-4.49.34c-.53 0-.95-.06-1.22-.07a1.4 1.4 0 01-.43-.07 15.8 15.8 0 011.65-.07 28.16 28.16 0 004.42-.49A26.94 26.94 0 00229 340a29.14 29.14 0 001-4.34 15 15 0 01.31-1.59zM180.86 381.25a2.08 2.08 0 01.14.56c.08.43.17 1 .29 1.63a24.78 24.78 0 01.36 2.6c.09 1 .25 2.18.27 3.47 0 .64.05 1.32.07 2s0 1.43 0 2.19c0 1.52-.17 3.13-.31 4.83a67.16 67.16 0 01-2.17 10.87 66.18 66.18 0 01-4.1 10.3c-.8 1.5-1.54 2.95-2.37 4.22-.4.64-.76 1.28-1.16 1.86l-1.16 1.66c-.72 1.07-1.48 2-2.11 2.76s-1.22 1.46-1.71 2-.84.89-1.14 1.21a2.27 2.27 0 01-.42.4 3.51 3.51 0 01.34-.47l1.06-1.27c.47-.54 1-1.21 1.64-2s1.35-1.71 2-2.8l1.12-1.66c.39-.58.74-1.22 1.13-1.86.81-1.28 1.53-2.72 2.31-4.21a63.16 63.16 0 006.22-21c.15-1.69.34-3.29.35-4.79 0-.75.08-1.48.07-2.18s0-1.37 0-2c0-1.28-.13-2.43-.19-3.45s-.17-1.89-.27-2.6-.14-1.21-.19-1.64a3.6 3.6 0 01-.07-.63zM76.19 351.4a4.09 4.09 0 011.08-.37 12.63 12.63 0 011.31-.32c.51-.1 1.1-.24 1.75-.31a28.88 28.88 0 014.64-.31 33.36 33.36 0 015.65.6 34.84 34.84 0 015.46 1.62 30.42 30.42 0 014.16 2.06c.58.32 1.06.68 1.5 1s.79.56 1.08.79a4.52 4.52 0 01.86.76c-.06.08-1.34-.93-3.63-2.2a32.89 32.89 0 00-4.15-1.93 36.48 36.48 0 00-5.38-1.56 37 37 0 00-5.56-.63 35.3 35.3 0 00-4.58.19c-2.6.26-4.17.7-4.19.61zM162 298.31a2.32 2.32 0 01.08-.59c.09-.44.19-1 .33-1.68a59.11 59.11 0 00.83-6.18 42 42 0 00-.28-9.22 31 31 0 00-3.57-10.64 24.42 24.42 0 00-7.46-8.3 21.58 21.58 0 00-8.47-3.39 19.09 19.09 0 00-6.18 0c-1.46.24-2.23.52-2.25.46a3.4 3.4 0 01.56-.21 12.63 12.63 0 011.65-.45 18.33 18.33 0 016.28-.15 21.28 21.28 0 018.68 3.36 24.31 24.31 0 017.64 8.44 31 31 0 013.59 10.82 40.48 40.48 0 01.17 9.32 47.78 47.78 0 01-1 6.2c-.16.72-.3 1.27-.41 1.65a3 3 0 01-.19.56z"
        fill="#263238"
      />
      <Path
        d="M122.61 292.79a66.7 66.7 0 01-.22-8.23 64.44 64.44 0 01.31-8.23 65.53 65.53 0 01.21 8.23 65.67 65.67 0 01-.3 8.23zM103.6 316.76a32.71 32.71 0 01-3.92-4.17 31.31 31.31 0 01-3.52-4.52 32.42 32.42 0 013.92 4.18 30.94 30.94 0 013.52 4.51zM135.48 312.05a50.66 50.66 0 01-7.06 2.11 52.19 52.19 0 01-7.2 1.61 50.55 50.55 0 017.07-2.11 51.9 51.9 0 017.19-1.61zM148.76 301.62a7.46 7.46 0 01-.42-2c-.17-1.26-.34-3-.42-5a48.53 48.53 0 01.06-5 7.55 7.55 0 01.26-2.05c.15 0 .06 3.14.2 7s.47 7.03.32 7.05zM99.1 345.38a45.76 45.76 0 01-.26-6.84 44.9 44.9 0 01.27-6.84 45 45 0 01.25 6.84 45.76 45.76 0 01-.26 6.84zM77.1 338.08a76.82 76.82 0 01-8.46-3.08 77.94 77.94 0 01-8.26-3.57 76.82 76.82 0 018.46 3.09 80.28 80.28 0 018.26 3.56zM58 363a44.53 44.53 0 01.5-6.87 46.46 46.46 0 011-6.81 44.47 44.47 0 01-.5 6.87 45.88 45.88 0 01-1 6.81zM89.22 383.5a14.78 14.78 0 01-2.63-.61c-1.61-.42-3.82-1-6.29-1.57s-4.71-1-6.34-1.37a16 16 0 01-2.62-.61 12.25 12.25 0 012.69.25c1.64.24 3.91.64 6.39 1.22s4.69 1.21 6.27 1.73a13.64 13.64 0 012.53.96zM100.13 374.27a93.86 93.86 0 01-2.95-13.7 48.17 48.17 0 011.73 6.8 48.12 48.12 0 011.22 6.9zM111.15 404a9 9 0 01-2.33-.18A49.28 49.28 0 0198 400.94a9.17 9.17 0 01-2.1-1 12.13 12.13 0 012.23.65c1.36.44 3.24 1 5.35 1.59s4 1 5.43 1.27a11.55 11.55 0 012.24.55zM123.56 401a12 12 0 01.11-2.45c.12-1.51.28-3.59.37-5.9s.11-4.39.12-5.9a13.5 13.5 0 01.08-2.46 10.12 10.12 0 01.29 2.45c.09 1.51.13 3.62 0 5.94a58 58 0 01-.52 5.91 10.76 10.76 0 01-.45 2.41zM171.37 331.06c-.12.09-2.14-2.5-4.84-5.49s-5.06-5.28-4.95-5.4a8.88 8.88 0 011.68 1.35c1 .9 2.29 2.19 3.65 3.7s2.51 2.95 3.3 4a8.22 8.22 0 011.16 1.84zM199.61 305.89a32 32 0 01-4.4 3.85 33.26 33.26 0 01-4.73 3.44 33.66 33.66 0 014.4-3.85 33.26 33.26 0 014.73-3.44zM183.88 291.89a87 87 0 01-.13-9.58 87.23 87.23 0 01.4-9.57 88.66 88.66 0 01.12 9.58 89.1 89.1 0 01-.39 9.57zM229.65 265.13a70.52 70.52 0 013.69-7.59 68.66 68.66 0 014.15-7.34 66.59 66.59 0 01-3.69 7.58 67.45 67.45 0 01-4.15 7.35zM226.33 294.93a87.08 87.08 0 01-5.77-7.53 87.52 87.52 0 01-5.35-7.84 83.43 83.43 0 015.77 7.53 90.17 90.17 0 015.35 7.84zM260.69 274.57a51.61 51.61 0 01-4.82 5.65 54 54 0 01-5.21 5.3 53.89 53.89 0 014.83-5.65 56.06 56.06 0 015.2-5.3zM250 322.61a75.76 75.76 0 01-5.31-7.2 78.28 78.28 0 01-4.88-7.49 78.48 78.48 0 015.31 7.19 76.23 76.23 0 014.88 7.5zM211.81 337.81a55.46 55.46 0 012.64-7.09 56.6 56.6 0 013.13-6.9 55.88 55.88 0 01-2.64 7.1 56.86 56.86 0 01-3.13 6.89zM186.25 359c-.07.12-4.49-2.07-9.87-4.9s-9.69-5.24-9.62-5.36 4.48 2.06 9.86 4.9 9.69 5.23 9.63 5.36zM203 395.57a12.84 12.84 0 011.3-2.49 67.53 67.53 0 013.76-5.64 65.59 65.59 0 014.32-5.23 13.17 13.17 0 012-2 17.75 17.75 0 01-1.74 2.21c-1.1 1.33-2.6 3.19-4.17 5.3s-2.91 4.09-3.87 5.52a18.59 18.59 0 01-1.6 2.33zM170.41 388.84a29 29 0 01-.41-5.46 27.78 27.78 0 01.11-5.48 30.19 30.19 0 01.41 5.47 29.55 29.55 0 01-.11 5.47zM200.5 425c-.12.09-1.89-2.13-4.24-4.72s-4.37-4.59-4.27-4.7a37.45 37.45 0 018.51 9.42zM184.11 439a55.23 55.23 0 01-6.1 4.74 59.39 59.39 0 01-6.4 4.32 55.23 55.23 0 016.1-4.74 57.64 57.64 0 016.4-4.32zM222.08 440.82a14.6 14.6 0 01-2.35.51c-1.46.28-3.46.69-5.64 1.28s-4.13 1.23-5.52 1.72a13.27 13.27 0 01-2.3.74 9.86 9.86 0 012.16-1.08 44.07 44.07 0 015.52-1.88 44.93 44.93 0 015.72-1.15 9.36 9.36 0 012.41-.14zM238.07 437.49c-.14 0-1-4.72-1.9-10.6s-1.52-10.66-1.38-10.68 1 4.72 1.9 10.6 1.52 10.66 1.38 10.68zM241.84 398.84a13.45 13.45 0 01-2.74-.63c-1.67-.47-4-1.2-6.44-2.11s-4.71-1.84-6.29-2.56a14.67 14.67 0 01-2.5-1.29 16.23 16.23 0 012.65.95c1.61.63 3.84 1.5 6.32 2.41s4.73 1.69 6.37 2.25a16.66 16.66 0 012.63.98zM269.71 418.77a62.31 62.31 0 01-4.17 6.89 63.07 63.07 0 01-4.61 6.61 61.51 61.51 0 014.17-6.89 63.07 63.07 0 014.61-6.61zM264.65 453.56a52 52 0 01-5.93-4.2 50.4 50.4 0 01-5.62-4.62 52 52 0 015.93 4.2 50.4 50.4 0 015.62 4.62zM259.14 377.29a65.76 65.76 0 01-2 8.13 67.12 67.12 0 01-2.51 8 67.2 67.2 0 012-8.13 66.72 66.72 0 012.51-8zM251 362.1a29.19 29.19 0 01-10.33-7.3c.11-.11 2.21 1.79 5.07 3.79S251 362 251 362.1zM263.12 337.79a27.53 27.53 0 01-2.67 4.55 27.11 27.11 0 01-3.11 4.26 27.53 27.53 0 012.67-4.55 27.11 27.11 0 013.11-4.26zM283.51 292.2a62.32 62.32 0 012-7.82 65.36 65.36 0 012.52-7.68 63.24 63.24 0 01-2 7.82 62.86 62.86 0 01-2.52 7.68zM299 324.65a13.06 13.06 0 01-2.32-1.55 55.39 55.39 0 01-5.08-4.41 52.36 52.36 0 01-4.48-5 11.65 11.65 0 01-1.58-2.3 19.42 19.42 0 011.86 2.06c1.13 1.3 2.71 3.05 4.57 4.89s3.64 3.39 4.94 4.49a17.29 17.29 0 012.09 1.82zM311.44 311c-.13-.08 1.29-2.43 2.62-5.53s2.09-5.75 2.24-5.71a26 26 0 01-4.86 11.24zM321.16 336.87a30.49 30.49 0 011-5.53 31.27 31.27 0 011.47-5.41 29.6 29.6 0 01-1 5.53 30.24 30.24 0 01-1.47 5.41zM344.26 352.07a46.53 46.53 0 01-5.6-4.09 45.81 45.81 0 01-5.28-4.5 46.53 46.53 0 015.6 4.09 44.68 44.68 0 015.28 4.5zM360.33 320.13a12.9 12.9 0 01-1.07 2.24c-.7 1.36-1.63 3.25-2.54 5.4s-1.63 4.12-2.13 5.57a14 14 0 01-.88 2.32 10.57 10.57 0 01.52-2.43 48.32 48.32 0 012-5.67 46.49 46.49 0 012.7-5.37 10.85 10.85 0 011.4-2.06zM372.79 303.88a91.17 91.17 0 01-9.5-2.64 92.32 92.32 0 01-9.34-3.15 97 97 0 019.5 2.65 97.12 97.12 0 019.34 3.14zM386.11 318.53a21.49 21.49 0 01-1.68 2.1 47.92 47.92 0 00-6.76 11 18.53 18.53 0 01-1.13 2.44 10.76 10.76 0 01.79-2.59 35.86 35.86 0 016.82-11.07 10.4 10.4 0 011.96-1.88zM392.59 296.14a20.49 20.49 0 010-2.9c.05-1.79.08-4.26 0-7s-.28-5.19-.44-7a20.73 20.73 0 01-.2-2.9 13.48 13.48 0 01.57 2.85 67.87 67.87 0 01.59 7 65.4 65.4 0 01-.14 7 13.68 13.68 0 01-.38 2.95zM417 295.76a46.85 46.85 0 01-5.65-4.33 48.48 48.48 0 01-5.35-4.73 50.1 50.1 0 015.66 4.33 47.76 47.76 0 015.34 4.73zM426.67 279.11a20.23 20.23 0 01-1.05-2.75c-.61-1.71-1.48-4.05-2.54-6.61s-2.1-4.83-2.88-6.47a18.85 18.85 0 01-1.19-2.69 14.43 14.43 0 011.52 2.53c.86 1.6 2 3.86 3 6.43s1.88 4.95 2.41 6.7a13.9 13.9 0 01.73 2.86z"
        fill="#fafafa"
      />
      <Path d="M227.73 343.34c-4 10.53-14.88 15.27-25 15.94h-.58a40 40 0 00-13.63 1.72 21.64 21.64 0 0039.21-17.62zM157.33 367.53c2.44 9.1 5.89 19.8 8.33 28.9 2.14 8 5.41 16.75 7.55 24.72l.94-.09c4.12-18.54-2.88-40.64-16.82-53.53zM289 326.32a36.74 36.74 0 00-20.31-18.4c5 7.2 10.65 15.89 11.22 25.22l7.45 4.28c2.32-2.24 3.04-8.21 1.64-11.1z" />
      <Path
        d="M182.23 256.05a12.27 12.27 0 00-2.85 1.27 11.59 11.59 0 00-2.09 2.31c-.06 0 0-.4.25-.95a5 5 0 011.54-1.79 5.07 5.07 0 012.17-.9c.61-.08.98.01.98.06zM194.41 271.68c-.06 0-.23-.42-.29-1.17a6.68 6.68 0 01.49-2.89 6.48 6.48 0 011.67-2.41c.56-.5 1-.69 1-.64a12.69 12.69 0 00-2.22 3.24 13.15 13.15 0 00-.65 3.87zM181.41 271a4.81 4.81 0 01.2-1.93 12.3 12.3 0 015.39-7.47 4.83 4.83 0 011.76-.8 15.47 15.47 0 00-7.35 10.2zM172.81 252.45c-.05 0 .13-.44.63-1a5.48 5.48 0 015.17-1.37c.69.2 1 .46 1 .52a9.1 9.1 0 00-3.65 0 9.32 9.32 0 00-3.15 1.85zM208.32 270.81a13 13 0 01-.61-2.54 14.35 14.35 0 01-.62-2.53 4.53 4.53 0 011.12 2.41 4.78 4.78 0 01.11 2.66zM222.68 271a17.12 17.12 0 00-4.51-8.37 8.43 8.43 0 013.31 3.62 8.24 8.24 0 011.2 4.75zM228.73 259.82c-.14.06-.52-.74-1.41-1.25s-1.75-.49-1.77-.64.2-.17.59-.19a2.63 2.63 0 011.44.39 2.54 2.54 0 011 1.08c.2.34.21.59.15.61zM240.22 255a17.61 17.61 0 01-1.5-1.08 10.85 10.85 0 00-4-1.62 11 11 0 00-4.35.1c-1.09.26-1.73.57-1.77.49a4 4 0 011.68-.84 9.61 9.61 0 018.68 1.57 4.39 4.39 0 011.26 1.38zM237.07 246.07a17.3 17.3 0 00-2.93-.21 19.18 19.18 0 00-2.84.75 4.68 4.68 0 015.77-.54zM183.78 232.93c-10.63.24-25.87-1-32.21-9.55s-3.59-24.1-.28-34.2c-9.42-10.52-9-28.4 1-38.44 1.79-1.82 3.87-3.43 5.18-5.62 2.47-4.12 1.74-9.31 2.34-14.09a24.56 24.56 0 0135.3-18.93c5.92-5.17 12.08-10.39 19.5-13s16.49-1.93 22.07 3.6c3.06 3 5 7.38 8.82 9.34s8.61.93 12.85 1.93c8.09 1.91 12.56 10.58 14.68 18.62s3.17 16.84 8.61 23.13c2.83 3.28 6.7 5.65 9 9.31a13.91 13.91 0 01-10.81 21.32c4.93 6.23 6 15 3.82 22.64S276.91 226.3 269 228.8a22.34 22.34 0 01-15.86-1.14s-4.11 7.82-23 7.06c-29.48-1.2-41.86 9.23-46.35-1.83"
        fill="#263238"
      />
      <Path
        d="M251.84 197.66c1.38-12.33-.17-32.36-2-48.72-1.61-14.72-12.22-32.38-26.86-30.14l-45.4 13.73a8.66 8.66 0 00-7.34 9.13l9.58 108.52a7.18 7.18 0 001.37 3.65 27.85 27.85 0 0027 11.36c17.84-2.31 21.84-13.75 22.66-17.4a7.25 7.25 0 00.18-1.86c-.45-14.07-.71-19.58-.7-19.48s18.74-4 21.51-28.79z"
        fill="#b78876"
      />
      <Path
        d="M242.15 165.11a3.17 3.17 0 01-2.9 3.33 3 3 0 01-3.38-2.7 3.15 3.15 0 012.89-3.32 3 3 0 013.39 2.69zM246.53 161.54c-.37.43-2.85-1.23-6.24-1.06s-5.81 2-6.2 1.58c-.19-.18.18-.94 1.23-1.78a8.64 8.64 0 014.93-1.77 8.29 8.29 0 015 1.36c1.07.75 1.46 1.48 1.28 1.67zM209.82 166.6a3.16 3.16 0 01-2.89 3.33 3 3 0 01-3.39-2.7 3.17 3.17 0 012.89-3.33 3 3 0 013.39 2.7zM212.9 162.66c-.37.43-2.85-1.22-6.24-1.06s-5.81 2-6.19 1.58c-.19-.17.17-.94 1.22-1.78a8.72 8.72 0 014.93-1.77 8.29 8.29 0 015 1.36c1.07.75 1.46 1.48 1.28 1.67zM226.15 186.37c0-.19 2.07-.65 5.47-1.25.86-.13 1.67-.34 1.79-.94a4.42 4.42 0 00-.69-2.54c-.92-2.06-1.87-4.22-2.87-6.48-4-9.24-6.93-16.85-6.56-17s3.92 7.2 7.91 16.44c1 2.28 1.89 4.45 2.76 6.53a5 5 0 01.61 3.38 2.15 2.15 0 01-1.37 1.33 5.9 5.9 0 01-1.46.28c-3.43.33-5.57.44-5.59.25z"
        fill="#263238"
      />
      <Path
        d="M230.35 226.45a62.67 62.67 0 01-33.35-7.27s9.11 17 33.64 13.55zM225.09 194.62a6.15 6.15 0 00-5.59-2 5.6 5.6 0 00-3.76 2.25 3.54 3.54 0 00-.08 4.06c1 1.25 2.9 1.46 4.5.92a12.88 12.88 0 004.22-2.79 3.83 3.83 0 00.92-1 1.13 1.13 0 00-.06-1.26"
        fill="#aa6550"
      />
      <Path
        d="M216.26 189.18c.55-.06.73 3.63 4 6.1s7.18 1.89 7.23 2.4c.06.23-.84.76-2.5.88a9.17 9.17 0 01-6-1.8 8 8 0 01-3.12-5.12c-.23-1.53.13-2.47.39-2.46zM213.92 155.74c-.3.94-3.71.66-7.67 1.32s-7.13 1.9-7.7 1.1c-.26-.39.27-1.28 1.52-2.24a13.53 13.53 0 0111.71-1.84c1.49.52 2.22 1.22 2.14 1.66zM245.81 155.53c-.56.8-2.94.11-5.75.2s-5.17.76-5.76 0c-.26-.38.08-1.17 1.09-2a8.32 8.32 0 019.27-.14c1.03.77 1.4 1.55 1.15 1.94zM190.54 118.38a16.85 16.85 0 0020.59 15.75c3.73-.85 7.77-2.93 11.11-1.07 3.52 2 3.88 7.11 7 9.61 4.5 3.58 11.24-.26 16.82 1.13 4.31 1.08 7.15 5 10.12 8.32s7.35 6.36 11.55 4.91a50 50 0 00-2.19-11.27 16.72 16.72 0 00-6.85-9c-1.81-1.07-3.88-1.68-5.57-2.93-3.66-2.69-4.7-7.62-7-11.5a18.47 18.47 0 00-14.47-8.71c-4.86-.28-9.79 1.39-14.56.41-3.52-.73-6.67-2.86-10.23-3.38-6.94-1-13.12 4.22-17.9 9.36"
        fill="#263238"
      />
      <Path
        d="M176.58 173c-.39-.17-15.59-4.61-15.09 10.9s16 11.82 16 11.37-.91-22.27-.91-22.27z"
        fill="#b78876"
      />
      <Path
        d="M172.54 189.57c-.07 0-.26.19-.71.42a2.73 2.73 0 01-2 .1c-1.66-.55-3.12-3.1-3.29-5.9a9.06 9.06 0 01.63-3.89 3.13 3.13 0 012-2.14 1.37 1.37 0 011.62.69c.22.43.13.74.22.76s.32-.27.17-.9a1.68 1.68 0 00-.64-1 2 2 0 00-1.5-.34 3.78 3.78 0 00-2.75 2.49 9.22 9.22 0 00-.8 4.36c.2 3.12 1.89 6 4.16 6.57a2.9 2.9 0 002.46-.49c.41-.36.48-.71.43-.73z"
        fill="#aa6550"
      />
      <Path
        d="M170.39 171.93A17 17 0 00191 154.1c5.72-.28 10.66-4.7 12.93-10s2.28-11.23 1.58-16.93a8 8 0 00-1.17-3.8c-1.7-2.36-5.16-2.34-8.06-2.09-7.47.65-15.17 1.38-21.76 5s-11.8 10.81-10.62 18.21c.58 3.62 2.59 7.18 1.69 10.73-.67 2.64-2.89 4.78-3.15 7.49a7.32 7.32 0 002.31 5.63 21.24 21.24 0 005.16 3.55M173.16 196.63c3 .48 6.12 1.37 7.83 3.89a11.29 11.29 0 011.67 8.7c2.41-.12 4.38 2 5.3 4.22 2.34 5.72-.3 12.67-5.17 16.48-1.71 1.33-3.82 2.38-6 2.09s-3.65-1.65-5.14-3a36.57 36.57 0 01-6.55-7.29 13.87 13.87 0 011-17.66c2-2.38 4.44-5.66 7-7.42"
        fill="#263238"
      />
      <Path
        d="M152.7 148.49a4.37 4.37 0 002.37.09 6.84 6.84 0 002.48-1.28 17 17 0 002.61-2.71 11 11 0 013.52-3c1.59-.77 3.49-.61 5.31-.44a12.48 12.48 0 002.8 0 6.89 6.89 0 002.68-1 11.29 11.29 0 004-4.58 45.9 45.9 0 002.21-5.82 30.86 30.86 0 012.34-5.38 17.2 17.2 0 017-7 12.36 12.36 0 016.52-1.37 6.92 6.92 0 012.39.54 17 17 0 00-2.4-.34 12.49 12.49 0 00-6.34 1.5 16.93 16.93 0 00-6.7 6.91 30.19 30.19 0 00-2.27 5.32 45 45 0 01-2.24 5.89 11.62 11.62 0 01-4.15 4.77 7.47 7.47 0 01-2.88 1 14.11 14.11 0 01-2.91 0c-1.84-.19-3.63-.34-5.09.35a10.81 10.81 0 00-3.42 2.89 17.56 17.56 0 01-2.71 2.69 7 7 0 01-2.62 1.25 3.83 3.83 0 01-1.83 0 2.11 2.11 0 01-.67-.28zM144.7 167a.77.77 0 010-.23 2.1 2.1 0 010-.67 8.27 8.27 0 01.72-2.48 19 19 0 012.05-3.55 18.64 18.64 0 011.63-2 9.79 9.79 0 012.25-1.82 7.64 7.64 0 016.5-.05 13.39 13.39 0 013.18 1.87 18.58 18.58 0 003.25 2 14.27 14.27 0 007.91 1.39 11.17 11.17 0 007.41-4.12c1.81-2.35 2.24-5.59 4.54-7.66a5.09 5.09 0 012-1.05 8.3 8.3 0 012.14-.26 28 28 0 004-.1 15.19 15.19 0 006.79-2.74 14.32 14.32 0 004.24-4.79 15.32 15.32 0 001.72-9.07 16.87 16.87 0 00-.5-2.5 5.2 5.2 0 01-.25-.87 11 11 0 011 3.35 15 15 0 01-12.88 17.09 27.74 27.74 0 01-4.08.13 8 8 0 00-2 .24 4.53 4.53 0 00-1.76 1c-2.12 1.86-2.57 5.07-4.46 7.58a11.68 11.68 0 01-7.76 4.32 14.72 14.72 0 01-8.19-1.47 18.53 18.53 0 01-3.32-2.06 13.12 13.12 0 00-3.07-1.83 7.26 7.26 0 00-6.15 0 9.46 9.46 0 00-2.19 1.73 19.69 19.69 0 00-1.64 1.91 20.23 20.23 0 00-2.09 3.46 8.72 8.72 0 00-.81 2.41 2.9 2.9 0 000 .66.82.82 0 01-.18.18zM273.55 134.07a8.39 8.39 0 00-1.88-2.7c-1.53-1.48-4.48-2.82-8.29-3.15-1.91-.18-4-.18-6.29-.39a15.36 15.36 0 01-6.95-2.11 22.57 22.57 0 01-5.64-5.72 41.33 41.33 0 00-5.48-6.5 15.67 15.67 0 00-7.55-3.52 30.17 30.17 0 00-7.9-.28c-2.52.2-4.9.59-7.14 1s-4.33.68-6.25.85a27 27 0 01-9.11-.45 13.66 13.66 0 01-3.15-1.14 5.58 5.58 0 01.82.27 9 9 0 001 .32 13.78 13.78 0 001.38.35 28.42 28.42 0 009 .29c1.91-.2 4-.53 6.22-.91s4.62-.8 7.17-1a30.3 30.3 0 018 .26 16.22 16.22 0 017.8 3.63 40.86 40.86 0 015.55 6.59 22.45 22.45 0 005.49 5.62 14.91 14.91 0 006.74 2.08c2.24.22 4.35.25 6.28.45 3.86.38 6.86 1.81 8.39 3.38a7.06 7.06 0 011.45 2 6 6 0 01.23.61q.13.17.11.17zM285 159.1s-.08 0-.25.1a7.64 7.64 0 01-.75.24 9.15 9.15 0 01-3 .27 8.87 8.87 0 01-2.16-.47 10.34 10.34 0 01-2.32-1.21 16.26 16.26 0 01-4.28-4.7c-1.26-2-2-4.52-3.26-6.94a10.43 10.43 0 00-2.55-3.28 9.56 9.56 0 00-4-1.82c-3-.68-6.27-.4-9.65-.89a18.34 18.34 0 01-12.84-8.61 50.12 50.12 0 00-2.79-4.28 9.67 9.67 0 00-3.76-3 14.15 14.15 0 00-4.52-1.08 63.54 63.54 0 00-8.75.38 25.79 25.79 0 01-17.7-5.27 18.47 18.47 0 01-3-2.77 1.36 1.36 0 01.21.17l.57.53a26.53 26.53 0 0012.31 6.42 26 26 0 007.56.49 61.9 61.9 0 018.81-.43 14.58 14.58 0 014.69 1.11 10 10 0 014 3.11 50.22 50.22 0 012.82 4.33 18.18 18.18 0 003.33 4 17.89 17.89 0 009.16 4.37c3.29.5 6.59.23 9.68.93a10 10 0 014.16 1.94 10.75 10.75 0 012.64 3.43c1.27 2.48 2 5 3.2 6.95a15.93 15.93 0 004.13 4.65 10.12 10.12 0 002.21 1.23 8.37 8.37 0 002.09.49 11.33 11.33 0 004.01-.39zM277.69 220.82a12.83 12.83 0 002-2.45 15.67 15.67 0 001.91-8.27 17 17 0 00-1.1-5.79 12.17 12.17 0 00-1.57-2.86 19.58 19.58 0 00-2.35-2.59c-1.74-1.66-3.82-3.14-5.77-5a14.88 14.88 0 01-4.56-6.81 11.7 11.7 0 01-.2-4.2c.16-1.38.46-2.69.73-4a24.39 24.39 0 00.56-3.8 9.45 9.45 0 00-.48-3.57 13.15 13.15 0 00-3.93-5.4 56 56 0 00-4.76-3.61 21.4 21.4 0 01-6.21-6 10.47 10.47 0 01-1-2.17 4.54 4.54 0 01-.17-.81 12.37 12.37 0 001.3 2.87 22.13 22.13 0 006.25 5.86 52.34 52.34 0 014.83 3.58 13.57 13.57 0 014.1 5.57 10.09 10.09 0 01.53 3.76 25.79 25.79 0 01-.56 3.87c-.53 2.57-1.21 5.29-.52 7.95a14.32 14.32 0 004.4 6.57c1.91 1.78 4 3.28 5.75 5a19.81 19.81 0 012.39 2.66 12.74 12.74 0 011.6 3 17.09 17.09 0 011.07 5.93 15.46 15.46 0 01-2.1 8.38 7.81 7.81 0 01-.82 1.11 4.84 4.84 0 01-.69.72 3.93 3.93 0 01-.63.5zM152.37 189.46a6.43 6.43 0 01-1.37-2.06 10.62 10.62 0 01-.62-6.62 12.63 12.63 0 015.79-7.89 16.57 16.57 0 015.46-2.23 33.1 33.1 0 016.28-.63c4.28-.09 8.43 0 11.9-1.28a16.68 16.68 0 007.7-5.77 17.28 17.28 0 002.89-5.9c.39-1.52.44-2.4.5-2.39a2.5 2.5 0 010 .63 12.78 12.78 0 01-.27 1.81A17.21 17.21 0 01180 169.2c-3.58 1.35-7.8 1.26-12.06 1.35a33.29 33.29 0 00-6.18.61 16.35 16.35 0 00-5.31 2.13 12.39 12.39 0 00-5.69 7.57 10.75 10.75 0 00.44 6.46 16.63 16.63 0 001.17 2.14z"
        fill="#455a64"
      />
      <Path
        d="M190.11 181.4l-6.34 13.93s10.7 17.51 19 23.43a36.86 36.86 0 0033.69 5s17.9-6.62 16.55-37.91c0 0-12.1-4.51-19.81-5.21s-24.85 4-31.36 3.16a90.64 90.64 0 01-11.73-2.4z"
        fill="#f5f5f5"
      />
      <Path
        d="M190 181.72a71.73 71.73 0 01-7.31-4.53 73.09 73.09 0 01-7-5 71.73 71.73 0 017.31 4.53 73.09 73.09 0 017 5zM183.82 195a20.28 20.28 0 01-4.5.71 20.55 20.55 0 01-4.55.2 20.61 20.61 0 014.5-.72 20.15 20.15 0 014.55-.19z"
        fill="#263238"
      />
      <Path
        d="M246.55 212.8a2.92 2.92 0 01-.61.28c-.41.17-1 .42-1.79.72a46.68 46.68 0 01-6.85 1.84 48.25 48.25 0 01-10.51.8 49 49 0 01-12.71-2.14 47.29 47.29 0 01-6.24-2.43 58.19 58.19 0 01-5.45-3c-3.38-2.08-6.29-4.15-8.75-5.83s-4.49-3-5.92-3.89l-1.64-1a2.59 2.59 0 01-.56-.38 3.57 3.57 0 01.61.28c.39.2 1 .5 1.7.92 1.45.82 3.52 2.1 6 3.75s5.42 3.69 8.79 5.73c1.69 1 3.5 2 5.43 2.95a47.75 47.75 0 006.18 2.39 49.4 49.4 0 0023 1.48 52.61 52.61 0 006.85-1.68l1.82-.62a3.54 3.54 0 01.65-.17z"
        fill="#e0e0e0"
      />
      <Path
        d="M251.06 199.34a2.38 2.38 0 01-.61.11l-1.78.22c-1.55.17-3.79.38-6.56.59a135.52 135.52 0 01-21.73 0 79.75 79.75 0 01-21.2-4.68 56 56 0 01-6-2.68c-.7-.34-1.22-.66-1.58-.86a3 3 0 01-.52-.33 2.34 2.34 0 01.57.24c.38.17.91.45 1.62.77 1.4.67 3.45 1.57 6.06 2.52a83.9 83.9 0 0021.12 4.5 150.32 150.32 0 0021.66.14l6.56-.43 1.79-.11a2.9 2.9 0 01.6 0z"
        fill="#263238"
      />
      <Path
        d="M250.23 191.51c-5.82-1.9-11.7-3.78-17.8-4.31s-11.93.27-17.89.65-12.61 0-18.19-2.12h-1.5a78 78 0 0055.41 6.51c.16 0 .35-.11.39-.27s-.22-.39-.42-.46z"
        fill="#e0e0e0"
      />
      <Path
        d="M252.6 191.7a3.94 3.94 0 01-.63-.13l-1.77-.44c-1.54-.39-3.76-1-6.52-1.62a84.62 84.62 0 00-9.77-1.76 71.27 71.27 0 00-12.14-.2c-4.32.23-8.45.53-12.21.47a44.38 44.38 0 01-9.93-1.13 26.9 26.9 0 01-6.31-2.35c-.7-.39-1.23-.7-1.57-.94a3 3 0 01-.52-.38c0-.05.76.44 2.18 1.14a29.09 29.09 0 006.31 2.17 45.42 45.42 0 009.84 1c3.74 0 7.85-.28 12.18-.51a70.06 70.06 0 0112.22.24 78.5 78.5 0 019.81 1.88c2.76.69 5 1.33 6.48 1.78l1.75.54a2.62 2.62 0 01.6.24z"
        fill="#263238"
      />
      <Path
        d="M190.4 195.47c5.22 3 10.34 6.29 16.06 8.09a99.62 99.62 0 0035.22 4.72c.92 0 2.14.16 2.24 1.07s-.83 1.32-1.62 1.55a31.77 31.77 0 01-8 1.08 63.9 63.9 0 01-23.56-3.46 50.68 50.68 0 01-20-12.83"
        fill="#e0e0e0"
      />
      <Path
        d="M239 207.28a13.19 13.19 0 01-2.89.65 42.92 42.92 0 01-7.13.46 41.9 41.9 0 01-7.11-.75 13.4 13.4 0 01-2.86-.76 24 24 0 012.93.4 55.62 55.62 0 0014.12.28 23.19 23.19 0 012.94-.28z"
        fill="#263238"
      />
      <Path
        d="M142.26 390.94c.18.33 4.2 3.45 4.2 3.45l7.37-2.66 9.2 4.7s8.26.87 8.33 3.85 4.91 17.62-1.37 27.64-10.73 13.34-10.73 13.34l-22.32-20.85-6.86-1.41z"
        fill="#b78876"
      />
      <G>
        <Path
          d="M363.43 56.32a47.8 47.8 0 00-35.27 80.08c.19.21.4.41.6.62l-9.07 23.25 29-10.21.07-.42c4.62 1.48 9.48 3.38 14.59 3.38 26.4 0 47.86-22.49 47.86-48.9a47.8 47.8 0 00-47.78-47.8z"
          fill="#fff"
        />
        <Path
          d="M363.38 57a4.31 4.31 0 01.86 0l2.51.07a25 25 0 014.06.4c.8.12 1.67.2 2.59.39l2.88.71a48.35 48.35 0 0128.91 71.17 48.74 48.74 0 01-23.3 20.26 47.62 47.62 0 01-16.16 3.56 46.27 46.27 0 01-16.9-2.1l-.5-.16h.39l-28.25 9.7-1.15.4.37-1.16 7.31-23.5.12.56a48.31 48.31 0 01-11.33-41.83 47.62 47.62 0 017.28-17.41 49.11 49.11 0 0111.19-11.67 51.83 51.83 0 015.86-3.8 54.26 54.26 0 015.65-2.59 38.8 38.8 0 015.08-1.62 32.78 32.78 0 014.36-.91c1.32-.17 2.49-.37 3.5-.46l2.57-.08h1.57a2.15 2.15 0 01.53 0 2.26 2.26 0 01-.53.08l-1.56.13-2.55.17c-1 .12-2.16.35-3.46.55a32.62 32.62 0 00-4.3 1 36.85 36.85 0 00-5 1.68 55.87 55.87 0 00-5.52 2.59 52.17 52.17 0 00-5.74 3.87 48.48 48.48 0 00-10.9 11.58 47 47 0 00-7 17.12A47.35 47.35 0 00328 136.52l.22.25-.1.32c-2.33 7.54-4.77 15.41-7.28 23.54l-.79-.76 28.24-9.8.2-.07.2.06.49.16a45.25 45.25 0 0016.47 2.05 46.67 46.67 0 0015.75-3.45 47.68 47.68 0 0022.8-19.72 47.76 47.76 0 00-14.36-63.77A47.7 47.7 0 00376.15 59l-2.84-.76c-.9-.21-1.76-.3-2.55-.45a27.62 27.62 0 00-4-.51l-2.5-.19a4.43 4.43 0 01-.88-.09z"
          fill="#263238"
        />
        <Path
          d="M334.98 108.49L342.41 101.06 356.75 113.8 384.88 86.72 391.79 94.16 355.69 128.13 334.98 108.49z"
          fill="#03a9f4"
        />
      </G>
    </Svg>
  );
}

const SvgDoctorOk = React.memo(SvgComponent);
export default SvgDoctorOk;