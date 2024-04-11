import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgPeopleOfficer = (props: SVGProps<SVGSVGElement>) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    viewBox="0 0 48 48"
    {...props}>
    <Path
      fill="#333"
      d="M24 9.5c.533.533 2 1.067 2 1.067s-.4 2.933-2 2.933-2-2.933-2-2.933 1.467-.534 2-1.067Z"
    />
    <Path
      fill="#333"
      fillRule="evenodd"
      d="m23.816 6.017-.008.002-.023.004-.083.016-.31.062c-.266.054-.645.134-1.098.237-.905.206-2.12.507-3.34.884-1.208.373-2.473.837-3.454 1.38-.488.27-.956.587-1.313.96-.355.369-.687.886-.687 1.535 0 1.745.49 3.023 1.008 3.88.255.422.514.737.718.953.01.115.025.244.053.384.101.526.354 1.196.934 1.847a8 8 0 1 0 15.575 0c.579-.651.832-1.32.933-1.847.028-.14.044-.269.053-.384a5.64 5.64 0 0 0 .718-.953c.519-.857 1.008-2.135 1.008-3.88 0-.649-.332-1.166-.687-1.535-.357-.373-.825-.69-1.313-.96-.981-.543-2.246-1.007-3.455-1.38a46.633 46.633 0 0 0-3.339-.884 50.988 50.988 0 0 0-1.408-.3l-.083-.015-.023-.004-.008-.002L24 5.983l-.184.034ZM24 7l.184-.983L24 7Zm-.184-.983L24 7l-.184-.983ZM24 18.5c2.207 0 3.689-.286 4.68-.658.839-.315 1.328-.691 1.61-1.008.103-.115.184-.227.248-.334H17.462c.064.107.145.22.247.334.284.317.772.693 1.61 1.008.992.372 2.474.658 4.681.658Zm7.372-4H16.628a3.74 3.74 0 0 1-.409-.558c-.343-.567-.715-1.484-.719-2.824a.647.647 0 0 1 .13-.172c.162-.169.436-.372.839-.594.8-.443 1.91-.859 3.076-1.22a44.638 44.638 0 0 1 3.192-.843A48.977 48.977 0 0 1 24 8.019c.057.01.127.025.208.041.254.052.618.13 1.055.229.876.199 2.037.487 3.192.844 1.166.36 2.276.776 3.076 1.219.403.222.677.425.84.594.09.095.12.151.129.172-.004 1.34-.376 2.257-.72 2.824-.148.247-.295.431-.408.558ZM18 20c0-.18.008-.358.023-.534 1.338.627 3.254 1.034 5.977 1.034 2.345 0 4.089-.3 5.382-.785.21-.078.408-.162.595-.25A6 6 0 1 1 18 20Zm-2.503-8.873v-.003.003Z"
      clipRule="evenodd"
    />
    <Path
      fill="#333"
      d="M12 35h7v1.246a1 1 0 0 1-.725.961l-2.5.715a1 1 0 0 1-.55 0l-2.5-.715a1 1 0 0 1-.725-.961V35ZM33.664 33.125a.17.17 0 0 0-.328 0l-.472 1.52a.174.174 0 0 1-.165.126h-1.526c-.167 0-.237.225-.101.328l1.234.94c.06.046.086.128.063.202l-.471 1.52c-.052.168.13.307.266.203l1.234-.94a.167.167 0 0 1 .204 0l1.234.94c.136.104.318-.035.267-.202l-.472-1.52a.186.186 0 0 1 .063-.203l1.234-.94c.136-.103.066-.328-.101-.328H34.3a.174.174 0 0 1-.165-.125l-.472-1.52Z"
    />
    <Path
      fill="#333"
      fillRule="evenodd"
      d="M16.879 28S6 31.393 6 35.467V42h36v-6.533C42 31.393 31.121 28 31.121 28l-6.477 5.457a1 1 0 0 1-1.288 0L16.879 28Zm14.668 2.257-5.614 4.73a3 3 0 0 1-3.866 0l-5.614-4.73a37.793 37.793 0 0 0-4.12 1.738c-1.296.647-2.483 1.364-3.317 2.093C8.115 34.875 8 35.343 8 35.467V40h32v-4.533c0-.124-.115-.592-1.016-1.38-.834-.728-2.02-1.445-3.317-2.092a37.793 37.793 0 0 0-4.12-1.738Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgPeopleOfficer;
