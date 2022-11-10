import React from "react";

function Icon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
      <path d="M279 288l14-93h-89v-60c0-25 13-50 53-50h40V6s-37-6-72-6c-73 0-121 44-121 125v70H23v93h81v224h100V288z"></path>
    </svg>
  );
}

export default React.memo(Icon);