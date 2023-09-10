import React from "react";
import { useNavigate } from "react-router-dom";

import { MenuItemProps } from "./types";

const MenuItem: React.FunctionComponent<MenuItemProps> = ({
  title,
  to,
  icon,
}) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(to)}>
      {icon}
      <span>{title}</span>
    </div>
  );
};
export default MenuItem;
