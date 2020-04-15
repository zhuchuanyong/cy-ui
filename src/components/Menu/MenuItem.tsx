import React, { Component, useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "./Menu";

export interface MenuItemProps {
  index: number; // 用来判断是否激活点击状态
  disabled?: boolean;
  classname?: string;
  style?: React.CSSProperties;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, disabled, classname, style, children } = props;
  console.log(MenuContext);

  // 用useContext方法 获取父组件传过来的 content值
  const context = useContext(MenuContext);
  console.log(context);
  console.log("--------------------");
  const classes = classNames("menu-item", classNames, {
    "is-disabled": disabled,
    "is-active": context.index === index,
  });

  const handldClick = () => {
    if (context.onSelect && !disabled) {
      context.onSelect(index);
    }
  };
  return (
    <li className={classes} onClick={handldClick} style={style}>
      {children}
    </li>
  );
};

export default MenuItem;
