import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/ui/button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "default",
  },
};

export const Blue: Story = {
  args: {
    children: "Blue Button",
    variant:"blue"
  },
};

export const Orange: Story = {
  args: {
    children: "Orange Button",
    variant: "orange",
  },
};
