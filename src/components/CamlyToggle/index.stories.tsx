import React, { useState } from "react";
import CamlyToggle from "./CamlyToggle";

export default {
  title: "Components/CamlyToggle",
  component: CamlyToggle,
};

export const Default: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => setIsChecked(!isChecked);

  return (
    <>
      <div style={{ marginBottom: "32px" }}>
        <CamlyToggle checked={isChecked} onChange={toggle} />
      </div>
      <div style={{ marginBottom: "32px" }}>
        <CamlyToggle checked={isChecked} onChange={toggle} scale="md" />
      </div>
      <div>
        <CamlyToggle checked={isChecked} onChange={toggle} scale="sm" />
      </div>
    </>
  );
};
