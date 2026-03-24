import { footerMenus } from "../../constants/footer-menus";
import { FooterMenuColumn } from "../FooterMenuColumn";

export const MenuItems = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 w-full lg:w-auto">
      {footerMenus.map((menu) => (
        <FooterMenuColumn key={menu.title} menu={menu} />
      ))}
    </div>
  );
};
