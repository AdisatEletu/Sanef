import React from "react";

const Header = props => {
  return (
    <header className="site-header  margin-left-200 header-text header-wrapper bg-white pos-f fixed-to-top light-shadow ">
      {props.title}
    </header>
  );
};

export default Header;
