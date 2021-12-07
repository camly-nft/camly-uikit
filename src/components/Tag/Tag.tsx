import React from "react";
import { StyledTag } from "./StyledTag";
import { TagProps } from "./types";

const Tag: React.FC<TagProps> = ({ startIcon, endIcon, children, ...props }) => (
  <StyledTag {...props}>
    {React.isValidElement(startIcon) &&
      React.cloneElement(startIcon, {
        mr: "0.5em",
      })}
    {children}
    {React.isValidElement(endIcon) &&
      React.cloneElement(endIcon, {
        ml: "0.5em",
      })}
  </StyledTag>
);

Tag.defaultProps = {
  // variant: variants.PRIMARY,
  // scale: scales.MD,
  // outline: false,
};

export default Tag;
