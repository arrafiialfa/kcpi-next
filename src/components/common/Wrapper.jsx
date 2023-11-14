import React from "react";
import PropTypes from "prop-types";

const wrapper = (props) => {
  return <div style={{ ...style, ...props.style }}>{props.children}</div>;
};

wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.any,
    PropTypes.object,
    PropTypes.element,
  ]),
};

export default wrapper;

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexFlow: "column",
  width: "100%",
  height: "100%",
  margin: "0",
  padding: "0",
  pointerEvents: "none",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
};
