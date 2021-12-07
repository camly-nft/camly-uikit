import React from "react";
import { CamlyInput, CamlyLabel, CamlyStack } from "./StyledCamlyToggle";
import { CamlyToggleProps, scales } from "./types";

const CamlyToggle: React.FC<CamlyToggleProps> = ({ checked, scale = scales.LG, ...props }) => (
  <CamlyStack scale={scale}>
    <CamlyInput id={props.id || "camly-toggle"} scale={scale} type="checkbox" checked={checked} {...props} />
    <CamlyLabel scale={scale} checked={checked} htmlFor={props.id || "camly-toggle"}>
      <div className="Camlys">
        <div className="Camly" />
        <div className="Camly" />
        <div className="Camly" />
        <div className="butter" />
      </div>
    </CamlyLabel>
  </CamlyStack>
);

export default CamlyToggle;
