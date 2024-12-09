import PropTypes from 'prop-types';
import React from "react";

const Button = ({ children, onClick, className, variant = "primary" }) => {
  return (
    <button
      onClick={onClick}
      className={`btn btn-${variant} ${className || ""}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
    variant: PropTypes.string
};

export default Button;