import React from "react";

function Icon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
      <path d="M544 288c17 0 32-14 32-32 1-9-3-17-11-24l-53-47V64c0-18-14-32-32-32h-32c-18 0-32 14-32 32v37L310 7c-6-5-14-7-21-7s-15 1-22 8L10 232c-7 7-10 15-10 24 0 18 14 32 32 32h32v184c0 22 18 40 40 40h80c22 0 40-18 40-40v-88c0-18 14-32 32-32h64c18 0 32 14 32 32v88c0 22 18 40 40 40h80c22 0 40-18 40-40v-16l1-8-1-160h32z"></path>
    </svg>
  );
}

export default React.memo(Icon);