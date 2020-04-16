import React, { useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "./Menu";
import { MenuItemProps } from "./MenuItem";
export interface SubMenuProps {
  index?: number;
  title: string;
  className?: string;
}
const SubMenu: React.FC<SubMenuProps> = ({
  index,
  title,
  className,
  children,
}) => {
  const context = useContext(MenuContext);
  const classes = classNames("menu-item submenu-item", className, {
    "is-active": context.index === index,
  });
  const renderChildren = () => {
    const childrenComponent = React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<
        MenuItemProps
      >;
      const { displayName } = childElement.type;
      if (displayName === "MenuItem") {
        // 返回子组件
        return childElement;
      } else {
        console.error("Warning: menu has child which is not a menuItem");
      }
    });
    return <ul className="menu-submenu">{childrenComponent}</ul>;
  };
  return (
    <li key={index} className={classes}>
      <div className="submenu-title">{title}</div>
      {renderChildren()}
    </li>
  );
};
SubMenu.displayName = "SubMenu";
export default SubMenu;
