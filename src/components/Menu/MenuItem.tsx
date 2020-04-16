import React, { Component, useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "./Menu";

export interface MenuItemProps {
  index?: number; // 用来判断是否激活点击状态
  disabled?: boolean;
  classname?: string;
  style?: React.CSSProperties;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, disabled, classname, style, children } = props;

  // 用useContext方法 获取父组件传过来的 content值
  const context = useContext(MenuContext);
  const classes = classNames("menu-item", classname, {
    "is-disabled": disabled,
    "is-active": context.index === index,
  });

  const handldClick = () => {
    if (context.onSelect && !disabled && typeof index === "number") {
      context.onSelect(index);
    }
  };
  return (
    <li className={classes} onClick={handldClick} style={style}>
      {children}
    </li>
  );
};

MenuItem.displayName = "MenuItem";
export default MenuItem;
