import * as React from "react";
const SvgFullScreen = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={48}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      fillRule="evenodd"
      d="M5.876 38.566v-3.14c0-1.46-1.24-2.65-2.767-2.65s-2.767 1.19-2.767 2.65v12.096h12.691c1.527 0 2.768-1.189 2.768-2.65 0-1.46-1.24-2.64-2.768-2.64H9.884l10.21-9.718a2.624 2.624 0 0 0 0-3.748c-1.144-1.025-2.862-1.025-3.912.01l-10.306 9.79Zm34.258-32.64-10.21 9.72a2.613 2.613 0 0 0 0 3.738c1.145 1.034 2.863 1.025 3.912-.01l10.306-9.79v3.148c0 1.461 1.24 2.64 2.768 2.64 1.527 0 2.767-1.179 2.767-2.64V.628H36.985c-1.526 0-2.767 1.188-2.767 2.65 0 1.46 1.24 2.649 2.767 2.649h3.15Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFullScreen;