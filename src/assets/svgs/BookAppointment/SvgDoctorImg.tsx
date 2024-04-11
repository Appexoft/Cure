import * as React from 'react';
import Svg, { Rect, Mask, G, Path, SvgProps } from 'react-native-svg';
import { scaleWidth } from '../../../utils/size';

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      width={scaleWidth(120)}
      height={scaleWidth(120)}
      viewBox="0 0 120 120"
      fill="none"
      {...props}>
      <Rect
        width={120}
        height={120}
        rx={60}
        transform="matrix(1 0 0 -1 0 120)"
        fill="#00C48C"
      />
      <Mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={120}
        height={120}>
        <Rect
          width={120}
          height={120}
          rx={60}
          transform="matrix(1 0 0 -1 0 120)"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#prefix__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48.403 34.884c-.17-.068-6.784-1.803-6.384 4.886.4 6.689 7.033 4.907 7.033 4.715 0-.193-.65-9.6-.65-9.6z"
          fill="#FFBE9D"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M46.858 42.073c-.03-.02-.112.089-.303.19-.187.1-.514.18-.87.07-.723-.216-1.385-1.303-1.49-2.506a3.849 3.849 0 01.227-1.688c.175-.502.47-.863.823-.947a.594.594 0 01.707.278c.1.182.066.318.102.327.02.016.137-.12.067-.393a.743.743 0 00-.289-.404.884.884 0 00-.654-.132c-.514.067-.95.57-1.156 1.11a3.959 3.959 0 00-.292 1.89c.123 1.344.889 2.564 1.873 2.786.477.094.862-.071 1.055-.241.197-.177.223-.33.2-.34z"
          fill="#AA6550"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M65.106 10.988c3.398 0 6.86 0 11.114 2.222 2.683 1.401 4.356 3.622 5.754 6.306 1.07 2.055 1.705 4.746 1.581 7.06-.123 2.312-.13 3.93-1.055 6.054"
          fill="#263238"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M63.747 11.513c10.058-.702 18.745 6.972 19.272 17.041.438 8.38.823 17.443.73 22.006C83.552 60.355 73.74 61.8 73.74 61.8s.217 2.905.459 6.508c.487 7.257-5.117 13.487-12.384 13.762-7.126.27-13.119-5.291-13.382-12.417l-1.457-39.479c-.359-9.726 7.062-17.983 16.771-18.661z"
          fill="#FFBE9D"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M73.74 61.8s-6.02.313-12.566-3.872c0 0 2.962 7.127 12.744 6.323l-.178-2.45z"
          fill="#FFBE9D"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M79.267 34.004c.02.739-.589 1.366-1.36 1.4-.77.036-1.412-.533-1.432-1.272-.02-.739.589-1.366 1.359-1.402.771-.035 1.413.535 1.433 1.274zM80.624 32.024c-.175.18-1.229-.612-2.734-.62-1.504-.03-2.614.736-2.776.55-.08-.082.1-.41.583-.756.477-.345 1.287-.678 2.225-.666.937.012 1.724.364 2.174.72.46.36.614.69.528.772zM64.504 34.004c.02.74-.589 1.365-1.36 1.401-.77.035-1.412-.534-1.432-1.273-.02-.739.589-1.366 1.36-1.401.77-.036 1.412.535 1.432 1.273zM65.824 32.186c-.174.182-1.23-.611-2.734-.62-1.504-.029-2.615.737-2.776.551-.08-.082.098-.41.584-.756.476-.345 1.286-.678 2.224-.666.937.012 1.724.363 2.174.72.459.36.614.69.528.771zM71.199 43.394c-.007-.086.93-.24 2.448-.422.385-.036.749-.11.816-.372.093-.276-.065-.692-.248-1.141l-1.112-2.936c-1.546-4.18-2.662-7.616-2.493-7.677.169-.061 1.559 3.278 3.104 7.458.372 1.03.728 2.013 1.066 2.954.142.437.388.935.187 1.51-.105.286-.39.493-.637.557-.246.073-.463.075-.653.085-1.527.07-2.473.07-2.478-.016zM66.76 44.4c.245-.012.235 1.622 1.624 2.793 1.388 1.175 3.13 1.005 3.142 1.233.022.103-.391.315-1.126.329a4.07 4.07 0 01-2.623-.938c-.848-.718-1.207-1.67-1.257-2.34-.057-.684.129-1.087.24-1.077zM66.26 26.29c-.151.408-1.653.202-3.42.4-1.773.164-3.202.67-3.432.3-.103-.176.148-.559.727-.95.574-.392 1.488-.76 2.549-.87 1.06-.107 2.03.069 2.672.336.646.266.97.59.904.784zM80.413 26.664c-.267.34-1.301-.023-2.549-.05-1.246-.07-2.304.212-2.544-.148-.106-.174.063-.515.527-.836.458-.318 1.22-.576 2.077-.543.856.034 1.596.35 2.027.703.438.355.58.708.462.874z"
          fill="#263238"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M47.09 33.231s.426 2.265.541 3.288c.042.373-.007 4.524 1 4.731.868.178 2.591-.611 3.359-2.328.767-1.716 2.227-5.835 2.069-7.708-.215-2.555-.334-5.151.176-7.664.511-2.512 1.712-4.963 3.732-6.543 2.02-1.579 4.93-2.132 7.222-.983 1.415.71 2.473 1.967 3.792 2.843 1.185.787 2.631 1.26 4.04 1.05 1.407-.208 2.737-1.19 3.122-2.56.42-1.495-.351-3.132-1.547-4.123-1.197-.99-2.743-1.444-4.266-1.746-4.224-.84-8.703-.672-12.718.888-4.014 1.56-7.576 4.556-9.292 8.507-1.984 4.568-1.753 7.369-1.23 12.348z"
          fill="#263238"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M69.483 34.068c-.038.003.005-.594-.254-1.614-.256-1-.924-2.47-2.428-3.608-.745-.556-1.683-1.027-2.764-1.216-1.075-.182-2.287-.147-3.439.293-.58.202-1.14.507-1.654.892-.52.378-.991.847-1.38 1.39-.804 1.07-1.257 2.445-1.27 3.862.012 1.417.465 2.793 1.269 3.864.39.543.861 1.011 1.38 1.39.515.384 1.075.69 1.655.892 1.152.44 2.364.475 3.439.293a6.538 6.538 0 002.765-1.217 6.632 6.632 0 002.427-3.608c.259-1.02.216-1.616.254-1.613.005 0 .007.036.008.108l-.004.318c0 .14-.007.313-.04.515-.028.203-.052.439-.125.696a6.627 6.627 0 01-2.414 3.723 6.669 6.669 0 01-2.834 1.279c-1.106.197-2.358.169-3.554-.28a6.358 6.358 0 01-1.716-.917 6.378 6.378 0 01-1.436-1.436c-.836-1.108-1.31-2.537-1.322-4.007.013-1.47.486-2.898 1.322-4.006a6.38 6.38 0 011.436-1.435 6.337 6.337 0 011.716-.917c1.196-.448 2.448-.477 3.554-.28a6.67 6.67 0 012.833 1.278c1.53 1.187 2.184 2.703 2.415 3.724.073.257.097.493.124.696.034.202.041.375.04.515.003.127.004.231.005.318a.363.363 0 01-.008.108zM86.726 34.068c-.038.003.004-.594-.255-1.614-.256-1-.923-2.47-2.427-3.608-.745-.556-1.684-1.027-2.765-1.216-1.074-.182-2.286-.147-3.438.293-.58.202-1.14.507-1.654.892a6.15 6.15 0 00-1.38 1.39c-.805 1.07-1.258 2.445-1.27 3.862.012 1.417.464 2.793 1.268 3.864.39.543.862 1.011 1.382 1.39.514.384 1.073.69 1.654.892 1.152.44 2.364.475 3.439.293a6.538 6.538 0 002.764-1.217 6.633 6.633 0 002.427-3.608c.26-1.02.217-1.616.255-1.613.004 0 .007.036.007.108 0 .086-.002.19-.004.318.001.14-.007.313-.04.515-.027.203-.052.439-.124.696a6.629 6.629 0 01-2.415 3.723 6.667 6.667 0 01-2.833 1.279c-1.106.197-2.358.169-3.554-.28a6.358 6.358 0 01-1.716-.917 6.37 6.37 0 01-1.436-1.436c-.836-1.108-1.31-2.537-1.322-4.007.013-1.47.486-2.898 1.322-4.006a6.365 6.365 0 011.436-1.435 6.345 6.345 0 011.716-.917c1.196-.448 2.447-.477 3.554-.28a6.667 6.667 0 012.833 1.278 6.628 6.628 0 012.414 3.724c.073.257.098.493.125.696.033.202.041.375.04.515l.004.318a.356.356 0 01-.007.108z"
          fill="#263238"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M73.57 33.358c-.02.033-.24-.09-.614-.213a4.044 4.044 0 00-1.51-.193 4.058 4.058 0 00-1.47.391c-.354.173-.555.323-.581.292-.02-.02.145-.222.497-.445.35-.223.9-.44 1.538-.484a3.372 3.372 0 011.589.276c.378.174.568.353.551.376zM76.241 16.831c.097-.508-.07-.793.215-1 .327-.238.944.385 1.17.633.072.08.303-.23.392-.29.071-.047.182-.563.171-.65-.041-.353-.598-.45-.86-.69-.262-.242-.587-.406-.923-.524-.293-.103-.656-.16-.884.052-.175.162-.204.425-.198.662.008.236.04.474.135.69a.972.972 0 00.47.506"
          fill="#263238"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M46.727 28.025s4.802 1.761 7.302 2.82l-.14-2.456-6.988-2.764s-.178 1.825-.174 2.4zM47.175 24.21c.027-.064 1.55.52 3.4 1.303 1.852.783 3.33 1.468 3.304 1.531-.026.063-1.549-.52-3.4-1.304-1.851-.782-3.33-1.468-3.304-1.53z"
          fill="#EBEBEB"
        />
        <Path
          d="M48.623 75.953l-.371-11.625s2.31 10.638 14.405 10.5c11.56-.132 11.349-9.373 11.349-9.373l.412 4.686v18.926l-7.54 30.876-9.629 1.221-10.641-42.206 2.015-3.005z"
          fill="#4B66EA"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M72.93 72.232c.008.005-.04.089-.14.247-.105.153-.23.402-.458.675-.416.573-1.126 1.334-2.153 2.084-1.023.755-2.4 1.44-4.022 1.888a14.212 14.212 0 01-5.426.376 17.702 17.702 0 01-5.212-1.569 22.601 22.601 0 01-3.807-2.294 26.292 26.292 0 01-2.305-1.91c-.262-.237-.452-.436-.585-.566-.13-.132-.196-.205-.19-.21.006-.007.083.054.224.174l.614.53c.534.46 1.322 1.11 2.345 1.84a23.65 23.65 0 003.8 2.23 17.871 17.871 0 005.148 1.53c1.895.234 3.737.071 5.336-.35 1.598-.428 2.96-1.087 3.98-1.811 1.024-.721 1.742-1.453 2.178-2.002.44-.546.651-.876.673-.862z"
          fill="#263238"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M64.536 171.462l-.174-54.866L48.78 76.553l-.524-12.051-9.493 7.18s-13.824 47.573-14.037 45.924c-.212-1.65-.005 53.856-.005 53.856h39.814z"
          fill="#EBEBEB"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M64.162 171.31c-.068 0-.123-12.364-.123-27.611 0-15.253.055-27.613.123-27.613s.124 12.36.124 27.613c0 15.247-.056 27.611-.124 27.611z"
          fill="#263238"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M38.902 79.519l1.927 1.459-1.354 8.875 22.743 23.823-20.657-27.125 1.76-7.032h-4.419z"
          fill="#E0E0E0"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M65.389 143.355l-34.903-10.234-1.156-26.511 9.573-34.928S16.083 83.066 14.53 90.311c-1.552 7.244-5.296 24.855-5.695 37.584-.357 11.381-.408 18.99 2.19 22.623 7.443 10.405 56.492 12.263 76.088-.015"
          fill="#EBEBEB"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M62.657 114.252a.84.84 0 01-.113-.129l-.313-.39-1.186-1.519-4.324-5.613-14.19-18.573-1.068-1.403-.036-.047.015-.057 1.764-7.031.116.148-4.42-.007h-.113v-.112l.02-7.837v-.047l.036-.028 6.86-5.213 1.883-1.413.495-.363c.112-.08.172-.12.174-.116.003.004-.05.05-.157.138l-.479.385-1.852 1.453-6.81 5.279.038-.075c.005 2.333.011 4.965.019 7.837l-.114-.113 4.42-.006h.152l-.037.147-1.756 7.034-.021-.105 1.068 1.402 14.131 18.618 4.262 5.66 1.149 1.546.293.406a.905.905 0 01.094.144z"
          fill="#263238"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M78.217 69.617c-2.784-4.869-4.228-4.362-4.228-4.362l.145 1.735.003 3.647-1.32 15.645-8.456 33.994.175 51.185H96.5l3.979-62.481-.362-26.916-21.901-12.447z"
          fill="#EBEBEB"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M100.118 82.064s8.274 6.108 8.991 15.934c.581 7.982 1.918 29.836 2.159 34.593.377 7.41-5.393 24.76-20.413 19.845-9.008-2.947-42.29-14.26-42.29-14.26l2.215-14.134 39.502 2.354.784-32.947 9.052-11.385z"
          fill="#EBEBEB"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M64.361 115.166a.777.777 0 01.05-.151l.168-.438.67-1.671c.596-1.461 1.45-3.55 2.5-6.127l3.74-9.073c.355-.85.706-1.737 1.145-2.604.422-.875.92-1.733 1.433-2.6a57.266 57.266 0 013.55-5.124 57.89 57.89 0 011.967-2.418l-.022.126-1.393-3.542-.046-.118.119-.04 5.827-1.981-.06.163-6.606-11.03c-.8-1.338-1.483-2.407-2.207-2.846a2.912 2.912 0 00-.884-.358c-.212-.052-.324-.071-.323-.079 0 0 .114.003.331.043.215.04.541.116.913.333.375.214.752.596 1.12 1.087a19.7 19.7 0 011.162 1.747l6.686 10.989.072.118-.132.045-5.821 1.997.073-.158 1.397 3.54.027.069-.049.057a58.62 58.62 0 00-1.956 2.407 57.871 57.871 0 00-3.54 5.099c-.51.86-1.006 1.712-1.426 2.579-.438.857-.787 1.732-1.146 2.585l-3.789 9.055-2.574 6.097-.712 1.653-.19.427a.72.72 0 01-.074.142zM32.614 99.316c-.017 0-.074-.258-.16-.72-.07-.224-.173-.496-.28-.811-.152-.299-.3-.652-.517-1.013-.425-.73-1.027-1.54-1.78-2.367-.771-.806-1.671-1.651-2.726-2.398-2.097-1.51-4.307-2.394-5.96-2.738-.83-.148-1.51-.255-1.984-.252-.473-.023-.737-.043-.738-.06 0-.017.262-.029.74-.036.48-.033 1.17.048 2.017.177 1.685.304 3.944 1.178 6.07 2.709 1.068.757 1.975 1.618 2.75 2.444.753.846 1.35 1.682 1.763 2.435.21.373.352.74.493 1.048.098.328.19.608.246.84.06.48.083.741.066.742zM91.347 108.929c.068 0 .124 3.826.124 8.545 0 4.72-.056 8.545-.124 8.545-.069 0-.124-3.825-.124-8.545 0-4.719.055-8.545.124-8.545zM14.806 89.456s-.03.108-.098.315c-.063.209-.185.51-.285.925-.23.82-.522 2.048-.85 3.646-.66 3.195-1.473 7.87-2.385 13.722a540.833 540.833 0 00-1.41 9.629c-.242 1.738-.391 3.552-.517 5.428a193.88 193.88 0 00-.296 5.806c-.145 3.986-.23 8.198-.114 12.585.033 1.096.074 2.205.165 3.318.028.56.12 1.11.188 1.666.118.548.218 1.104.405 1.638.34 1.074.856 2.107 1.57 3.003.711.885 1.64 1.654 2.697 2.076l.015.006.005.003c2.188 1.13 4.584 1.948 7.03 2.684 2.451.735 4.984 1.327 7.556 1.856 5.755 1.176 11.463 1.867 16.976 2.067 2.758.084 5.462-.02 8.103-.211a98.613 98.613 0 007.704-.828c4.984-.72 9.63-1.827 13.828-3.214a70.911 70.911 0 0011.18-4.797l.013.153-15.339-5.43-4.13-1.475-1.068-.387c-.24-.088-.36-.14-.36-.14s.126.036.369.117l1.075.366 4.145 1.432 15.364 5.358.18.063-.168.091a70.655 70.655 0 01-11.198 4.84c-4.205 1.4-8.863 2.518-13.858 3.247a98.955 98.955 0 01-7.72.838c-2.643.194-5.361.301-8.128.219-5.53-.199-11.25-.889-17.018-2.067-2.578-.53-5.116-1.124-7.575-1.862-2.456-.74-4.86-1.561-7.076-2.707l.02.008c-1.137-.454-2.07-1.24-2.808-2.156-.735-.922-1.263-1.984-1.61-3.081-.19-.546-.293-1.112-.41-1.67-.071-.565-.163-1.128-.19-1.688a64.76 64.76 0 01-.163-3.33c-.11-4.395-.02-8.609.132-12.599.076-1.995.18-3.934.308-5.812.13-1.877.285-3.697.532-5.439.483-3.482.976-6.702 1.44-9.628.933-5.852 1.77-10.524 2.458-13.716.34-1.596.646-2.822.89-3.64.108-.414.237-.715.307-.921.075-.205.119-.307.119-.307z"
          fill="#263238"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30.528 129.951c5.837-6.462 5.58-17.953 2.23-26.107-.308 8.833-1.35 16.666-2.15 25.249"
          fill="#E0E0E0"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M32.771 105.499c.008.001.008.098-.002.283l-.052.807-.233 2.963-.806 9.772-.765 9.775a3594.76 3594.76 0 01-.224 2.964c-.028.328-.05.594-.07.806-.018.183-.032.28-.04.28-.01-.001-.012-.098-.01-.283l.024-.808c.024-.702.075-1.716.146-2.969.143-2.507.382-5.967.694-9.785.31-3.817.628-7.27.877-9.768l.311-2.956.099-.803c.024-.183.042-.278.051-.278zM47.16 93.824c.068 0 .123 2.243.123 5.01s-.055 5.011-.124 5.011c-.068 0-.123-2.244-.123-5.011s.055-5.01.123-5.01z"
          fill="#263238"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M43.357 110.471c.087 1.023.526 1.945 1.075 2.658.547.712 1.663 1.41 2.56 1.359 0 0 2.24.191 3.447-1.729 1.092-1.74 1.361-5.357.485-7.495-.602-1.472-1.955-2.839-3.545-2.877-2.085-.048-3.393 1.458-3.839 2.984"
          fill="#E0E0E0"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M43.54 105.371s.047-.397.386-1.022c.17-.311.416-.676.783-1.026a3.683 3.683 0 012.469-1.026c.347-.018.724.023 1.084.143.728.234 1.402.735 1.937 1.388.543.65.942 1.475 1.139 2.371.203.895.264 1.845.212 2.81-.097 1.486-.388 2.963-1.21 4.093a3.666 3.666 0 01-1.574 1.187c-.594.236-1.2.326-1.782.299h.014c-.478.019-.905-.136-1.277-.316a4.187 4.187 0 01-.96-.67c-.54-.515-.835-1.087-1.047-1.559a4.589 4.589 0 01-.33-1.151 3.049 3.049 0 01-.031-.313c-.002-.071 0-.107.004-.108.036-.009.035.596.463 1.525.22.452.532 1.012 1.05 1.486.263.235.576.451.932.625.355.166.763.303 1.185.28H47c1.069.038 2.368-.374 3.152-1.428.765-1.058 1.06-2.51 1.15-3.963.102-1.876-.212-3.766-1.28-5.024-.508-.63-1.146-1.11-1.824-1.338a2.838 2.838 0 00-1.017-.147 3.57 3.57 0 00-2.38.937 4.29 4.29 0 00-.792.972c-.358.598-.442.985-.47.975z"
          fill="#263238"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M42.247 110.565c.087 1.023.526 1.945 1.074 2.658.548.712 1.663 1.41 2.561 1.359 0 0 2.24.191 3.447-1.729 1.092-1.739 1.361-5.357.485-7.495-.602-1.471-1.956-2.839-3.545-2.876-2.086-.05-3.393 1.458-3.84 2.983"
          fill="#E0E0E0"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M42.43 105.465s.047-.397.386-1.022c.17-.311.415-.675.782-1.026a3.688 3.688 0 012.469-1.026 2.98 2.98 0 011.086.143c.727.234 1.4.735 1.937 1.388.541.65.941 1.475 1.138 2.372.203.895.265 1.845.212 2.81-.097 1.485-.388 2.962-1.21 4.092a3.668 3.668 0 01-1.574 1.187c-.594.236-1.2.326-1.782.3h.014c-.478.018-.905-.137-1.277-.317a4.185 4.185 0 01-.96-.67c-.539-.514-.835-1.087-1.047-1.558a4.602 4.602 0 01-.331-1.152 2.99 2.99 0 01-.03-.313c-.002-.071-.001-.107.004-.107.036-.009.035.595.462 1.525.221.451.533 1.011 1.052 1.485.262.235.575.452.93.625.357.166.764.303 1.186.28H45.89c1.069.038 2.368-.374 3.151-1.427.766-1.058 1.06-2.511 1.151-3.964.102-1.876-.212-3.766-1.28-5.023-.509-.63-1.145-1.111-1.824-1.338a2.818 2.818 0 00-1.017-.148 3.572 3.572 0 00-2.38.937 4.315 4.315 0 00-.793.972c-.358.598-.441.986-.47.975z"
          fill="#263238"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M44.26 104.932c-1.037-.207-2.108.505-2.547 1.467-.438.962-.341 2.096.006 3.095.177.508.42 1.002.79 1.394.369.391.876.672 1.414.688.79.024 1.499-.515 1.958-1.157a4.416 4.416 0 00.669-3.638c-.217-.822-.822-1.665-1.671-1.687"
          fill="#E0E0E0"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M44.878 105.094c0-.007.065-.015.189-.005.123.012.307.055.514.174.416.231.891.802 1.085 1.632a4.484 4.484 0 01-.293 2.903c-.236.505-.573 1.01-1.063 1.395-.473.385-1.167.632-1.83.438-.654-.184-1.152-.67-1.461-1.195a5.339 5.339 0 01-.61-1.638c-.228-1.091-.042-2.173.474-2.864.508-.698 1.191-.991 1.654-1.052a1.82 1.82 0 01.541-.002c.121.026.183.044.181.052-.002.028-.26-.049-.705.044-.436.087-1.07.391-1.528 1.058-.463.657-.623 1.675-.394 2.718.115.521.297 1.066.593 1.559.292.489.747.921 1.321 1.082.573.167 1.173-.039 1.615-.391.453-.35.776-.823 1.006-1.301.458-.967.5-1.981.328-2.767-.162-.794-.59-1.349-.964-1.589-.381-.247-.66-.222-.653-.251z"
          fill="#263238"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M46.651 112.726c-.037.01-.09-.148-.252-.339a1.773 1.773 0 00-.81-.519c-.368-.115-.73-.133-.995-.155-.264-.019-.432-.041-.433-.075 0-.033.162-.074.432-.099a2.807 2.807 0 011.07.093c.418.13.735.405.878.654.148.25.139.437.11.44zM47.024 104.286c.021.021-.073.169-.294.344a2.304 2.304 0 01-1 .436 2.307 2.307 0 01-1.089-.059c-.268-.086-.408-.192-.395-.219.025-.069.656.186 1.44.036.789-.133 1.29-.594 1.338-.538zM79.606 70.32c.004-.007.058.013.156.058.099.045.244.113.422.218a8.6 8.6 0 011.42 1.016c1.12.953 2.427 2.64 3.053 4.83a30.994 30.994 0 011.163 5.621c.08.73.126 1.322.153 1.732.025.41.03.637.013.639-.017.001-.055-.223-.108-.63l-.232-1.719a36.206 36.206 0 00-1.226-5.574c-.613-2.14-1.86-3.798-2.932-4.77-1.073-.988-1.91-1.376-1.882-1.42z"
          fill="#263238"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M85.354 123.687c-.411 0-.84-.036-1.287-.107l.075-.468c1.7.272 3.125-.007 4.241-.828 1.404-1.031 2.308-2.876 2.689-5.484l.014-.099c.156-1.033.37-21.315.37-25.165.001-6.014-5.279-6.836-5.503-6.868-.214-.039-5.013-.84-7.56 5.728-2.665 6.88-6.927 20.137-7.21 21.691-.034.19-.086.426-.147.699-.443 1.989-1.365 6.129 1.396 8.513 3.077 2.657 5.505 1.629 5.606 1.585l.194.432c-.113.05-2.791 1.208-6.11-1.659-2.976-2.569-2.012-6.895-1.549-8.974.06-.266.111-.496.144-.681.284-1.566 4.562-14.88 7.235-21.777 2.693-6.951 8.024-6.035 8.077-6.024.049.006 5.903.902 5.902 7.335 0 3.172-.21 24.138-.376 25.235l-.014.098c-.4 2.738-1.368 4.688-2.877 5.797-.925.679-2.034 1.021-3.31 1.021z"
          fill="#263238"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M91.694 95.415c-.063.021-.139-1.012-.988-2.364a8.019 8.019 0 00-1.874-2.03 8.077 8.077 0 00-3.045-1.438c-2.37-.545-4.62.046-6.003.783-1.415.736-2.047 1.542-2.087 1.495-.006-.006.031-.056.108-.146.08-.086.187-.228.355-.378.32-.319.835-.73 1.542-1.126a8.605 8.605 0 012.672-.94 8.584 8.584 0 013.47.071 8.105 8.105 0 013.127 1.5 7.879 7.879 0 011.884 2.118c.412.7.633 1.324.73 1.764.065.217.077.394.097.51.016.118.02.18.011.181z"
          fill="#263238"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M79.85 125.409s4.662-7.063 5.854-7.988c1.192-.925 11.37-5.52 12.561-4.781 1.192.738.459 2.342.459 2.342s4.309-1.51 4.767-.915c.458.595.55 1.604 0 2.429 0 0 2.384-.367 2.384.367 0 .733-.275 1.65-1.376 2.474-1.1.826-8.253 5.589-8.827 6.904l-2.318-.14-13.504-.692z"
          fill="#FFBE9D"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M93.27 123.389c-.014-.007.055-.168.212-.445.155-.276.409-.661.766-1.104.708-.89 1.891-1.959 3.382-2.847 1.49-.889 2.947-1.476 4-1.88.528-.2.958-.352 1.258-.453.3-.1.468-.147.474-.132.006.016-.151.094-.439.222l-1.227.525c-1.034.444-2.47 1.053-3.939 1.93-1.47.875-2.645 1.902-3.375 2.748-.739.842-1.074 1.459-1.113 1.436zM87.354 123.275c-.015-.009.067-.193.226-.52.16-.326.397-.796.717-1.364.324-.565.729-1.235 1.286-1.903.287-.332.575-.672.977-.968a26.62 26.62 0 011.235-.769c1.716-1.002 3.336-1.797 4.552-2.27a13.445 13.445 0 011.466-.491c.357-.08.554-.116.558-.099.01.041-.773.223-1.957.751-1.189.51-2.787 1.325-4.494 2.322-.424.252-.84.5-1.223.756-.354.254-.665.601-.94.914-.554.645-.969 1.296-1.309 1.845l-.783 1.322c-.186.312-.296.482-.31.474z"
          fill="#AA6550"
        />
      </G>
    </Svg>
  );
}

const SvgDoctorImg = React.memo(SvgComponent);
export default SvgDoctorImg;
