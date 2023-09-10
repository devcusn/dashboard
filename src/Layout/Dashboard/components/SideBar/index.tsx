import { AppSettings } from "../../../../settings/App.settings";
import { SideBarMenu } from "../../../../settings/Menu.settings";
import MenuItem from "./MenuItem";

const SideBar = () => {
  return (
    <div className="w-56  border-r-2 border-slate-300">
      <div className="flex gap-2 items-center py-3 px-2 ">
        {AppSettings.logo}
        <p className="text-xl font-sans ">{AppSettings.name}</p>
      </div>

      <div className="px-2">
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
