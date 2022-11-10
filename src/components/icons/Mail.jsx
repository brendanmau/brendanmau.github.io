import React from "react";

function Icon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M48 64a48 48 0 00-29 86l218 164c11 8 27 8 38 0l218-164a48 48 0 00-29-86H48zM0 176v208c0 35 29 64 64 64h384c35 0 64-29 64-64V176L294 339a64 64 0 01-76 0L0 176z"></path>
    </svg>
  );
}

export default React.memo(Icon);
