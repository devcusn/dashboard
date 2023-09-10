import { SideBarMenu } from "../../../../settings/Menu.settings";
import MenuItem from "./MenuItem";

const SideBar = () => {
  return (
    <div className="w-56">
      <p className="text-2xl font-sans p-6">Logo</p>
      <div>
        {SideBarMenu.map((menuItem) => (
          <MenuItem
            title={menuItem.title}
            icon={menuItem.icon}
            to={menuItem.to}
          />
        ))}
      </div>
    </div>
  );
};
export default SideBar;
