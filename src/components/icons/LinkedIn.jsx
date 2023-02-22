import React from "react";

function Icon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="-286 284 285 250">
            <path d="M-264 359h50v160h-50zm24-75c-19 0-31 12-31 28 0 15 12 27 30 27 19 0 31-12 31-27-1-16-12-28-30-28zm162 74c-29 0-47 15-50 26v-25h-56v160h56v-86l1-13c4-10 12-20 27-20 20 0 29 15 29 36v83h56v-89c0-49-28-72-63-72z" />
        </svg>
    );
}

export default React.memo(Icon);