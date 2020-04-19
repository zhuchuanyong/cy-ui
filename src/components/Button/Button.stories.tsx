import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "./Button";

export default {
  title: "Button2",
  component: Button,
};

export const Text = () => (
  <Button onClick={action("clicked")}>Hello Button123</Button>
);

export const Emoji = () => (
  <Button onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
