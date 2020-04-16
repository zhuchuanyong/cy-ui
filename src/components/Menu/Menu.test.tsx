import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Menu, { MenuProps } from "./Menu";
import MenuItem from "./MenuItem";

const testProps: MenuProps = {
  defaultIndex: 0,
  onSelect: jest.fn(),
  className: "test",
};

const testVerProps: MenuProps = {
  defaultIndex: 0,
  mode: "vertical",
};

const generateMenu = (props) => {
  return (
    <Menu {...props}>
      <MenuItem index={0}>中国</MenuItem>
      <MenuItem disabled index={1}>
        山东
      </MenuItem>
      <MenuItem index={2}>滕州</MenuItem>
    </Menu>
  );
};
describe("测试menu/menuItem", () => {
  it("should", () => {});
  it("click", () => {});
  it("ver", () => {});
});
