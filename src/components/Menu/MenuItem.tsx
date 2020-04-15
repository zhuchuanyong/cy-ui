import React, { Component, useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";

export interface MenuItemProps {
  index: number;
  disabled?: boolean;
  classname?: string;
  style?: React.CSSProperties;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, disabled, classname, style, children } = props;
  const context = useContext(MenuContext);
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
