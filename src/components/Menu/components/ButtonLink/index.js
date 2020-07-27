import React from 'react';

 /**
  * Button Link Component
  * @param {object} props
  * @returns {Element} JSX
  */
function ButtonLink(props) {
    // props = { className: "buttonLink", href: "/"" }
    return (
        <a href={ props.href } className={ props.className }>
            { props.children }
        </a>
    );
}

export default ButtonLink;
