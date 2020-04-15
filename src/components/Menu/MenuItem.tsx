import React, { Component } from "react";
import classNames from "classnames";

export interface MenuItemProps {
  index?: number;
  disable?: boolean;
  classname?: string;
  style?: React.CSSProperties;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, disable, classname, style, children } = props;
  const classes = classNames("menu-item", classNames, {
    "is-disabled": disable,
  });
  return (
    <li className={classes} style={style}>
      {children}
    </li>
  );
};

export default MenuItem;
