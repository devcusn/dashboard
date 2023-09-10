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
    <div
      className="flex items-center gap-2 p-2 hover:bg-indigo-100 cursor-pointer"
      onClick={() => navigate(to)}
    >
      {icon}
      <span className="text-xl">{title}</span>
    </div>
  );
};
export default MenuItem;
