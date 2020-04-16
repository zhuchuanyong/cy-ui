import React, { useState, createContext } from "react";
import classNames from "classnames";
import { MenuItemProps } from "./MenuItem";

// 定义菜单模式
type MenuMode = "horizontal" | "vertical";

// 定义函数类型
type SelectCallback = (selectedIndex: number) => void;

interface ImenuContext {
  index: number;
  onSelect?: SelectCallback;
  mode?: MenuMode;
}

// 引入Context  向子组件传值/事件
export const MenuContext = createContext<ImenuContext>({ index: 0 });

export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: SelectCallback;
}
const Menu: React.FC<MenuProps> = (props) => {
  const { defaultIndex, className, mode, style, children, onSelect } = props;
  const [currentActive, setActive] = useState(defaultIndex);
  const classes = classNames("menu", className, {
    "menu-vertical": mode === "vertical",
    "menu-horizontal": mode !== "vertical",
  });
  const handleClick = (index: number) => {
    setActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };
  const passedContext: ImenuContext = {
    index: currentActive ? currentActive : 0,
    onSelect: handleClick,
    mode: mode,
  };

  /**
   * 判断子组件是不是MenuItem
   * 是则渲染,不是 则返回错误
   */
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<
        MenuItemProps
      >;
      const { displayName } = childElement.type;
      if (displayName === "MenuItem" || displayName === "SubMenu") {
        // 返回子组件
        // return child;
        //返回子组件并设置index
        return React.cloneElement(childElement, {
          index,
        });
      } else {
        return console.error("Warning: menu has child which is not a menuItem");
      }
    });
  };
  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  );
};
Menu.defaultProps = {
  defaultIndex: 0,
  mode: "horizontal",
};
export default Menu;
