import * as React from 'react';
import Svg, { Path, Mask, G, SvgProps } from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={236} height={202} viewBox="0 0 236 202" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M235.789 194.681c0 3.689-51.216 6.68-114.394 6.68C58.216 201.361 7 198.37 7 194.681 7 190.991 58.216 188 121.395 188c63.178 0 114.394 2.991 114.394 6.681z"
        fill="#F5F5F5"
      />
      {/**@ts-ignore */}
      <Mask
        id="prefix__a"
        maskUnits={'userSpaceOnUse'}
        x={175}
        y={182}
        width={36}
        height={12}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M175.766 182.664h35.062v11h-35.062v-11z"
          fill="#fff"
        />
      </Mask>
      {/**@ts-ignore */}
      <G mask="url(#prefix__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M175.766 182.664l2.872 11 32.191-.295s-4.402-3.326-20.578-3.085l-1.568-7.62h-12.917z"
          fill="#FFBE9D"
        />
      </G>
      <Path
        d="M140.671 58.398l-24.146 2.278-9.81 2.777a26.601 26.601 0 00-11.172 6.402l-31.609 30.34-5.769-47.133-15.793 1.374 2.636 60.669a18.069 18.069 0 0017.213 12.577c4.738.012 9.263-1.988 12.716-5.233l22.507-21.155-2.235 27.916-7.737 17.352 55.249 31.202s6.49-32.123 9.974-54.344c2.818-17.977 4.251-57.133 4.251-57.133l-16.275-7.89z"
        fill="#4B66EA"
      />
      <Path
        d="M155.508 65.732s12.217 4.528 15.171 14.096c2.62 8.484 11.36 56.198 11.36 56.198l8.672 50.499-18.158.69-20.908-86.065 3.863-35.418z"
        fill="#4B66EA"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M94.75 127.972c-.143-.014.666-9.682 1.808-21.59 1.141-11.914 2.182-21.556 2.326-21.543.143.014-.667 9.679-1.808 21.592-1.141 11.909-2.183 21.555-2.326 21.541zM134.962 104.236c.017.007-.039.169-.16.472l-.552 1.315a20.09 20.09 0 01-.972 2.038c-.417.776-.848 1.685-1.455 2.615l-.914 1.483c-.322.514-.707 1.014-1.079 1.55-.728 1.086-1.631 2.15-2.556 3.291a53.757 53.757 0 01-6.863 6.63 53.746 53.746 0 01-8.014 5.185c-1.321.643-2.563 1.28-3.786 1.744-.606.241-1.18.503-1.753.7l-1.651.555c-1.044.381-2.028.595-2.877.825-.848.24-1.593.384-2.205.485l-1.406.24c-.322.05-.493.066-.496.049-.003-.018.161-.07.477-.152l1.382-.336a22.594 22.594 0 002.172-.568c.838-.255 1.808-.491 2.835-.892.52-.186 1.063-.379 1.627-.582.564-.206 1.13-.474 1.728-.722 1.205-.476 2.428-1.123 3.73-1.771a55.99 55.99 0 007.913-5.168 55.943 55.943 0 006.823-6.535c.926-1.122 1.833-2.166 2.57-3.232.376-.526.766-1.016 1.094-1.519l.936-1.453c.622-.91 1.073-1.801 1.511-2.559.447-.754.782-1.429 1.045-1.988l.64-1.27c.152-.288.239-.437.256-.43z"
        fill="#263238"
      />
      <Path
        opacity={0.1}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M101.161 132.868c-1.763-.502-2.676-2.665-2.225-4.441.451-1.776 1.945-3.129 3.598-3.922 1.651-.793 3.479-1.122 5.259-1.557a44.118 44.118 0 0020.542-11.524c.523-.52 1.267-1.096 1.914-.743.87.474.325 1.802-.32 2.554-7.758 9.049-18.016 15.931-29.33 19.678"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M156.324 121.503c-.035.009-.165-.357-.369-1.027a94.062 94.062 0 01-.807-2.853 241.624 241.624 0 01-2.33-9.496 241.86 241.86 0 01-1.96-9.582 92.622 92.622 0 01-.492-2.923c-.103-.693-.142-1.079-.107-1.086.036-.007.143.366.306 1.047l.654 2.89 2.107 9.54 2.18 9.521.645 2.892c.144.684.208 1.068.173 1.077zM45.166 58.967c-.144.013-.351-1.054-.462-2.38-.113-1.328-.087-2.414.056-2.426.143-.01.35 1.054.463 2.381.111 1.327.086 2.413-.057 2.425zM49.787 59.114c-.144.007-.318-1.128-.39-2.535-.072-1.407-.013-2.554.13-2.562.144-.007.319 1.128.39 2.535.072 1.408.014 2.554-.13 2.562zM54.38 58.819c-.145.008-.332-1.257-.419-2.823-.088-1.568-.043-2.845.101-2.853.143-.008.331 1.256.42 2.823.086 1.568.041 2.844-.103 2.853zM63.26 107.435c-.143-.015-.067-1.885.169-4.176.236-2.292.543-4.137.687-4.123.143.015.067 1.884-.17 4.177-.236 2.291-.543 4.137-.686 4.122zM175.539 181.956c.142-.024.456 1.109.701 2.531.246 1.424.33 2.597.188 2.621-.141.025-.455-1.109-.701-2.532-.246-1.423-.33-2.596-.188-2.62zM181.51 181.952c.142-.023.431 1.004.646 2.295.214 1.291.273 2.356.131 2.38-.141.023-.43-1.004-.645-2.295-.215-1.291-.274-2.357-.132-2.38zM187.175 181.377c.146-.012.353 1.158.596 2.594.24 1.436.428 2.609.287 2.645-.136.037-.556-1.096-.8-2.558-.248-1.462-.224-2.671-.083-2.681zM165.313 71.613c0 .097-1.268.02-3.236.432-1.954.397-4.623 1.409-6.928 3.42-2.305 2.012-3.669 4.52-4.326 6.402-.674 1.894-.77 3.16-.865 3.147-.032-.003-.041-.32.016-.89.055-.57.2-1.39.5-2.374.582-1.957 1.94-4.59 4.333-6.678 2.392-2.087 5.183-3.077 7.201-3.39a12.544 12.544 0 012.421-.173c.572.02.885.073.884.104z"
        fill="#263238"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M172.779 92.14c.024.065-1.123.562-3.012 1.277a139.707 139.707 0 01-7.465 2.558 139.25 139.25 0 01-7.595 2.145c-1.96.488-3.186.731-3.204.664-.018-.072 1.175-.442 3.107-1.019l7.537-2.287 7.498-2.408c1.917-.624 3.109-.999 3.134-.93zM180.481 126.949c.013.07-1.185.391-3.132.85a360.532 360.532 0 01-7.629 1.688c-2.987.63-5.695 1.172-7.662 1.539-1.967.366-3.192.559-3.208.488-.016-.069 1.179-.388 3.127-.847a353.687 353.687 0 017.635-1.69 349.434 349.434 0 017.665-1.54c1.967-.367 3.19-.558 3.204-.488zM189.212 170.52c-.002.075-1.149.106-3 .155-1.851.047-4.405.126-7.223.287-2.819.163-5.365.378-7.21.543-1.843.164-2.986.265-2.997.191-.009-.068 1.117-.298 2.956-.557a91.486 91.486 0 017.221-.697 91.494 91.494 0 017.253-.135c1.856.046 3.001.145 3 .213zM109.066 129.558c-.035.064-.822-.287-2.077-.885l-4.895-2.343-4.91-2.313c-1.257-.596-2.027-.982-1.998-1.051.026-.064.847.203 2.144.713a82.665 82.665 0 014.987 2.181 83.213 83.213 0 014.841 2.486c1.215.683 1.941 1.15 1.908 1.212zM149.311 136.385c-.016.033-.436-.129-1.181-.447l-3.146-1.371a359.55 359.55 0 00-10.432-4.379 363.54 363.54 0 00-10.577-4.023l-3.224-1.176c-.759-.284-1.174-.456-1.163-.49.011-.034.447.073 1.227.297.781.222 1.902.57 3.28 1.022a182.36 182.36 0 0110.65 3.886 182.763 182.763 0 0110.392 4.528 95.532 95.532 0 013.08 1.522c.719.376 1.11.599 1.094.631zM152.445 107.971c-.003.019-.197.001-.564-.048l-1.598-.239-5.864-.95c-4.95-.809-11.79-1.903-19.36-3.018a1251.106 1251.106 0 00-19.412-2.686l-5.889-.78-1.599-.231c-.365-.059-.556-.098-.554-.116.002-.018.197-.013.566.011l1.61.135c1.397.126 3.417.335 5.91.614a592.52 592.52 0 0119.444 2.537 594.32 594.32 0 0119.347 3.17c2.468.451 4.463.832 5.837 1.115l1.581.335c.36.082.548.133.545.151zM150.182 77.96c-.021.143-10.842-1.356-24.166-3.348-13.328-1.99-24.112-3.72-24.091-3.863.021-.142 10.84 1.357 24.168 3.35 13.324 1.99 24.11 3.72 24.089 3.861zM93.5 104.206c-.067.028-.638-1.221-1.537-3.248-.956-2.154-2.17-4.89-3.514-7.914l-3.591-7.882c-.922-2.017-1.479-3.27-1.413-3.305.033-.015.216.277.518.82a70.81 70.81 0 011.226 2.325 184.53 184.53 0 013.735 7.828 186.606 186.606 0 013.38 7.985c.406 1.034.721 1.874.927 2.461.206.586.303.916.27.93zM71.959 125.287c-.142.029-1.52-6.01-3.079-13.486-1.56-7.481-2.71-13.566-2.569-13.595.141-.03 1.52 6.008 3.08 13.488 1.558 7.478 2.709 13.564 2.567 13.593zM63.057 92.477c.03.14-4.167 1.159-9.373 2.274-5.209 1.116-9.453 1.906-9.483 1.765-.03-.141 4.166-1.158 9.374-2.274 5.206-1.116 9.452-1.906 9.482-1.765zM59.922 65.131c.01.07-.931.28-2.465.54a114.4 114.4 0 01-6.022.838c-2.36.268-4.503.445-6.057.535-1.554.09-2.518.097-2.523.026-.006-.073.947-.21 2.49-.393l6.031-.686 6.03-.684c1.545-.168 2.505-.249 2.516-.176z"
        fill="#FAFAFA"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M68.05 17.628c.287.565 7.795 39.166 7.795 39.166l-17.705.826-6.856-33.194 16.767-6.798z"
        fill="#455A64"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M75.845 56.794l2.028-.857-7.661-38.05-2.404-.16 8.037 39.067zM60.933 26.066a.916.916 0 01-.798 1.022.916.916 0 01-1.023-.797.92.92 0 01.798-1.024.919.919 0 011.023.799z"
        fill="#263238"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M57.278 53.163l-.263-5.055 7.564-3.116-2.95-7.005a6.104 6.104 0 00-8.495-2.907L50.1 36.727a8.672 8.672 0 00-4.304 5.597c-.986 4.127-1.85 12.733-1.758 12.345"
        fill="#FFBE9D"
      />
      <Path
        d="M37.032 181.85s-31.117 8.611-32.365 9.051c-1.875.66-1.56 7.528 1.357 7.421 1.38-.051 23.901.839 26.747.661 2.845-.179 11.43-3.562 11.43-3.562l-7.169-13.571z"
        fill="#4B66EA"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.07 193.723c-.157.021-.368-1.625-1.372-3.341-.98-1.732-2.297-2.74-2.2-2.865.054-.119 1.6.758 2.651 2.605 1.07 1.836 1.051 3.614.92 3.601zM27.314 192.251c-.152.026-.468-1.444-1.296-3.069-.813-1.635-1.807-2.764-1.695-2.87.086-.103 1.302.915 2.16 2.635.87 1.713.964 3.296.83 3.304zM30.357 191.436c-.157-.009-.037-1.563-.728-3.287-.661-1.735-1.803-2.796-1.694-2.91.062-.118 1.457.843 2.179 2.72.742 1.869.369 3.522.243 3.477z"
        fill="#263238"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.805 187.417c-.056.014-.331-.855-.334-2.315a10.931 10.931 0 01.778-3.982c.1-.247.216-.531.499-.763.29-.26.818-.207 1.069.053.285.248.375.599.414.88a6.86 6.86 0 01-.152 2.345c-.23.951-.6 1.747-.957 2.379-.725 1.262-1.354 1.908-1.398 1.873-.071-.049.45-.775 1.072-2.043a10.3 10.3 0 00.816-2.314c.095-.448.149-.927.15-1.422-.015-.477-.008-1.076-.287-1.305-.15-.122-.282-.131-.412-.034-.137.104-.252.317-.341.544-.193.464-.35.925-.471 1.373a12.505 12.505 0 00-.412 2.429c-.091 1.408.05 2.289-.034 2.302z"
        fill="#263238"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.843 187.101c-.014-.057.737-.315 2.007-.324a9.051 9.051 0 012.208.27c.403.11.836.213 1.271.469.427.216.873.808.703 1.422-.133.578-.628.983-1.12 1.11-.496.139-.976.089-1.396-.004-.854-.195-1.518-.616-2.022-.993-.997-.782-1.484-1.382-1.446-1.425.054-.066.644.446 1.657 1.122.51.327 1.15.679 1.91.827.377.072.785.095 1.153-.016.366-.101.67-.38.758-.739.09-.349-.122-.666-.463-.869-.333-.206-.746-.326-1.129-.44-.77-.22-1.489-.321-2.096-.366-1.218-.085-1.982.039-1.995-.044zM19.288 194.056c-.154-.018 0-1.348-.613-2.807-.583-1.471-1.62-2.315-1.524-2.435.052-.127 1.353.61 2.006 2.239.672 1.62.257 3.058.131 3.003zM41 195.492c.014.033-.413.232-1.203.565a26.56 26.56 0 01-3.463 1.074c-2.977.75-7.219 1.175-11.88 1.126-4.663-.051-8.865-.264-11.912-.386l-3.606-.191c-.852-.056-1.32-.105-1.32-.141.001-.036.473-.056 1.326-.062l3.61.026 11.905.233c4.64.049 8.831-.314 11.795-.964 2.975-.611 4.712-1.377 4.748-1.28z"
        fill="#263238"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M41.92 196.201c-.042.071-.894-.426-2.33-1.057-1.422-.609-3.55-1.339-5.889-.978-2.345.359-4.008 1.933-5.09 3.027-1.09 1.133-1.73 1.885-1.793 1.832-.047-.039.484-.865 1.522-2.082.526-.6 1.192-1.298 2.064-1.929.862-.633 1.972-1.172 3.215-1.363 2.508-.384 4.718.454 6.125 1.159 1.427.731 2.208 1.34 2.176 1.391z"
        fill="#263238"
      />
      <Path
        d="M70.06 173.258s29.445 19.279 30.501 20.077c1.585 1.198-.233 6.903-2.98 5.915-1.299-.467-26.007-7.34-28.665-8.374-2.657-1.034-9.809-6.864-9.809-6.864l10.953-10.754z"
        fill="#4B66EA"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M78.805 188.507c-.129-.027.394-1.726 1.97-3.151 1.563-1.441 3.301-1.807 3.317-1.676.055.148-1.507.709-2.966 2.06-1.479 1.33-2.179 2.835-2.32 2.767zM76.16 186.12c-.124-.048.446-1.527 1.796-2.896 1.34-1.377 2.808-1.978 2.858-1.855.075.136-1.215.909-2.486 2.22-1.283 1.297-2.03 2.602-2.167 2.531zM73.509 184.419c-.134.005.013-1.684 1.287-3.238 1.258-1.57 2.88-2.062 2.903-1.93.069.141-1.341.805-2.498 2.257-1.181 1.432-1.54 2.95-1.692 2.911z"
        fill="#263238"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M75.255 180.758c-.077-.038.326-.834.667-2.204.167-.684.307-1.513.346-2.44.02-.462.01-.95-.033-1.451-.016-.242-.06-.48-.159-.622-.094-.131-.224-.164-.403-.092-.336.134-.51.706-.669 1.158-.15.47-.245.943-.29 1.399-.09.915-.023 1.755.075 2.452.207 1.398.483 2.247.401 2.273-.053.019-.456-.786-.764-2.209a9.288 9.288 0 01-.19-2.558 6.97 6.97 0 01.28-1.51c.076-.258.172-.508.288-.77.123-.256.315-.563.662-.713.318-.171.837-.062 1.035.274.2.307.222.613.243.878a10.926 10.926 0 01-.468 4.031c-.446 1.39-.972 2.134-1.02 2.104z"
        fill="#263238"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M75.315 180.445c-.038.075-.728-.274-1.914-.563a10.448 10.448 0 00-2.11-.289c-.398-.006-.828-.019-1.208.077-.386.089-.684.329-.704.687-.026.368.179.728.497.935.317.217.712.319 1.095.366.769.09 1.485-.053 2.069-.208 1.17-.337 1.888-.646 1.92-.567.023.053-.623.476-1.811.918-.594.207-1.355.406-2.228.333-.428-.039-.9-.137-1.331-.419-.43-.271-.78-.807-.73-1.399.025-.637.63-1.065 1.1-1.142.494-.111.938-.079 1.355-.06.84.053 1.584.22 2.186.413 1.208.395 1.845.868 1.814.918zM93.83 198.175c-.034.046-.495-.298-.72-1.142-.248-.822-.093-2.087.55-3.194.308-.56.662-1.044.987-1.471.322-.427.655-.814 1-1.072.34-.266.695-.385.94-.393.246-.011.373.049.368.079 0 .081-.525.042-1.07.595-.276.263-.552.632-.85 1.074-.301.438-.63.915-.917 1.438-.597 1.038-.774 2.111-.647 2.871.106.762.427 1.164.358 1.215zM83.26 190.277c-.138.015-.096-1.48 1.036-2.821 1.117-1.354 2.581-1.661 2.591-1.525.057.145-1.19.634-2.19 1.859-1.027 1.204-1.286 2.517-1.438 2.487z"
        fill="#263238"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M62.136 185.052c.026-.031.477.301 1.294.888a36.87 36.87 0 003.631 2.224c1.583.851 3.538 1.733 5.766 2.567 2.23.832 4.73 1.616 7.375 2.383 5.297 1.524 10.093 2.918 13.553 3.959l4.091 1.257c.963.308 1.491.494 1.481.529-.009.035-.556-.086-1.536-.334-1.067-.284-2.459-.653-4.137-1.097-3.487-.951-8.295-2.288-13.598-3.815-2.649-.768-5.16-1.571-7.399-2.433-2.237-.866-4.197-1.793-5.774-2.693a28.994 28.994 0 01-3.574-2.385c-.786-.641-1.194-1.027-1.173-1.05z"
        fill="#263238"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M61.044 185.448c-.015-.058.913-.401 2.495-.663 1.555-.245 3.915-.372 6.19.756 1.125.558 2.02 1.409 2.648 2.274.64.866 1.062 1.733 1.38 2.465.62 1.474.875 2.423.818 2.445-.076.032-.457-.879-1.152-2.289-.699-1.371-1.805-3.376-3.93-4.43-2.118-1.055-4.368-1.005-5.907-.856-1.562.164-2.524.379-2.542.298z"
        fill="#263238"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M139.062 20.519l1.922 38.89c.327 6.615-4.947 12.156-11.569 12.156-6.18 0-11.271-4.858-11.57-11.03-.142-2.927-.266-5.37-.3-5.668 0 0-9.947-.443-11.146-10.206-.579-4.718-.982-14.534-1.243-23.418-.281-9.541 6.825-17.695 16.313-18.741l.943-.104c10.238-.527 16.405 7.872 16.65 18.12z"
        fill="#FFBE9D"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M117.513 54.727s6.234-.18 12.347-5.028c0 0-2.237 7.369-12.09 7.564l-.257-2.536z"
        fill="#EB996E"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M108.264 27.346c.055.739.728 1.303 1.502 1.26.772-.044 1.355-.678 1.3-1.418-.055-.74-.727-1.305-1.5-1.261-.774.043-1.357.679-1.302 1.419zM107.787 25.81c.193.162 1.164-.737 2.667-.898 1.5-.184 2.687.467 2.83.265.071-.09-.142-.4-.66-.695-.511-.297-1.355-.546-2.29-.44-.936.11-1.685.54-2.098.944-.423.405-.544.752-.449.824zM123.017 26.076c.056.74.728 1.303 1.502 1.26.772-.043 1.355-.677 1.3-1.417-.055-.74-.727-1.306-1.5-1.262-.774.044-1.357.678-1.302 1.419zM122.586 24.46c.193.163 1.166-.736 2.668-.897 1.499-.184 2.687.467 2.83.265.07-.09-.141-.399-.661-.695-.511-.297-1.354-.546-2.29-.439-.935.11-1.684.54-2.098.943-.422.405-.543.752-.449.823zM118.362 36.204c-.002-.086-.954-.145-2.489-.17-.388.002-.76-.034-.853-.289-.121-.268-.006-.698.131-1.166l.812-3.046c1.117-4.334 1.88-7.88 1.705-7.923-.175-.044-1.222 3.434-2.339 7.767-.266 1.067-.521 2.085-.762 3.058-.097.453-.292.975-.033 1.53.135.274.439.451.692.49.255.048.471.028.662.02 1.532-.087 2.477-.185 2.474-.27zM122.899 36.756c-.246.013-.069 1.644-1.337 2.955-1.266 1.316-3.024 1.324-3.012 1.554-.011.104.422.273 1.158.213a4.092 4.092 0 002.524-1.204c.773-.804 1.035-1.79 1.017-2.467-.013-.689-.239-1.072-.35-1.05zM121.549 18.616c.193.392 1.672.032 3.458.05 1.787-.018 3.265.343 3.459-.05.084-.188-.206-.544-.824-.877-.614-.332-1.564-.605-2.635-.607-1.071.002-2.021.275-2.635.607-.618.332-.908.69-.823.877zM107.859 21.4c.302.312 1.298-.156 2.541-.31 1.237-.198 2.323-.024 2.526-.408.088-.184-.116-.51-.612-.78-.489-.273-1.277-.452-2.13-.332-.852.122-1.559.513-1.953.91-.401.399-.507.767-.372.92z"
        fill="#263238"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M139.062 27.846c.159-.091 6.499-2.728 7.022 3.98.525 6.708-6.318 5.85-6.345 5.659-.027-.192-.677-9.639-.677-9.639z"
        fill="#FFBE9D"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M141.59 34.783c.028-.023.124.072.328.148.199.074.535.108.875-.05.688-.316 1.197-1.487 1.135-2.7a3.864 3.864 0 00-.458-1.646c-.243-.476-.587-.794-.949-.829a.595.595 0 00-.664.375c-.076.194-.022.325-.057.34-.018.017-.153-.102-.121-.383a.752.752 0 01.232-.442.889.889 0 01.633-.22c.52-.006 1.023.434 1.301.944.308.51.517 1.15.552 1.838.062 1.355-.531 2.675-1.479 3.03-.462.16-.867.048-1.082-.094-.221-.15-.268-.297-.246-.31z"
        fill="#EB996E"
      />
      {/**@ts-ignore */}
      <Mask
        id="prefix__b"
        maskUnits={'userSpaceOnUse'}
        x={109}
        y={1}
        width={35}
        height={34}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M109.587 1h33.545v33.168h-33.545V1z"
          fill="#fff"
        />
      </Mask>
      {/**@ts-ignore */}
      <G mask="url(#prefix__b)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M142.756 27.21c-1.047-.135-2.707 1-3.036 2.003-.33 1.003-.306 2.095-.634 3.098-.328 1.002-1.212 1.974-2.26 1.845-.722-.089-1.298-.693-1.561-1.372-.262-.678-.269-1.426-.258-2.153.05-3.165.365-6.333.144-9.49-.222-3.159-1.029-6.375-2.976-8.87-1.946-2.499-5.195-4.133-8.304-3.535-2.059.397-3.844 1.691-5.876 2.207-2.409.613-5.092.035-7.034-1.516-.249-.199-1.369-.772-1.369-.772-.018-.162-.019-1.575.476-2.144 3.676-4.239 10.938-6.109 16.496-5.345 5.558.765 11.049 4.024 13.935 8.836 2.886 4.811 2.973 11.936 2.257 17.207z"
          fill="#263238"
        />
      </G>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.495 181.49s72.209-47.364 75.166-48.35c2.957-.985 10.102-5.667 17.248-3.696 7.145 1.972 13.551 8.378 16.754 17.741 3.204 9.363 3.45 30.307 3.45 30.307S140.446 194 129.358 197.45a28.77 28.77 0 01-2.886.725c-13.535 2.685-27.298-3.539-34.874-15.071l-1.61-2.453S42.75 198.006 42.01 197.759l-8.516-16.269z"
        fill="#263238"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.87 126.241S.037 129.395 0 139.301c-.07 18.971 38.334 39.884 38.334 39.884l51.108-33.863v-3.558S23.654 118.11 8.87 126.241z"
        fill="#263238"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M122.83 168.452s-.131.067-.396.175l-1.182.47c-1.066.41-2.603 1.001-4.578 1.763l-17.012 6.409a3387.775 3387.775 0 01-25.596 9.435c-9.714 3.53-20.478 7.408-31.973 11.3l-.208.07-.103-.195c-1.805-3.447-3.71-7.083-5.641-10.775l-2.876-5.493-.111-.213.2-.127 55.08-34.965c6.992-4.41 12.633-7.967 16.547-10.437l4.494-2.804 1.172-.717c.266-.16.409-.23.409-.23s-.124.1-.381.272l-1.147.76-4.443 2.885-16.46 10.573-54.988 35.1.089-.339 2.876 5.493c1.93 3.693 3.834 7.33 5.638 10.778l-.311-.127c11.489-3.881 22.258-7.739 31.98-11.241l25.632-9.328c7.226-2.651 13.039-4.783 17.067-6.262l4.61-1.675 1.199-.425c.27-.093.413-.13.413-.13z"
        fill="#455A64"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M63.553 162.425c-.022.029-.495-.294-1.33-.902a151.077 151.077 0 01-3.497-2.64 292.471 292.471 0 01-11.19-9.143 290.366 290.366 0 01-10.732-9.68 153.166 153.166 0 01-3.138-3.057c-.728-.734-1.118-1.153-1.093-1.179.024-.026.462.343 1.233 1.033l3.248 2.932c2.74 2.48 6.544 5.882 10.821 9.556a565.991 565.991 0 0011.08 9.25l3.391 2.768c.798.657 1.23 1.034 1.207 1.062zM23.298 133.332c-.02-.128 2.261-.351 4.925.447 2.671.778 4.464 2.202 4.38 2.299-.086.135-1.95-1.052-4.528-1.8-2.57-.771-4.779-.787-4.777-.946z"
        fill="#455A64"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.7 130.342c.047-.123 1.685.598 3.03 2.278 1.362 1.671 1.72 3.424 1.59 3.443-.148.051-.706-1.54-1.994-3.115-1.268-1.59-2.707-2.471-2.625-2.606z"
        fill="#455A64"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.06 190.415c-.027-.06.61-.183 1.317.399.696.557 1.287 1.669 1.477 2.967.193 1.307-.098 2.508-.465 3.271-.362.776-.76 1.14-.805 1.104-.069-.049.21-.479.463-1.241.26-.753.468-1.862.292-3.061-.175-1.192-.664-2.222-1.209-2.766-.542-.569-1.08-.59-1.07-.673z"
        fill="#263238"
      />
    </Svg>
  );
}

const SvgMobile = React.memo(SvgComponent);
export default SvgMobile;
