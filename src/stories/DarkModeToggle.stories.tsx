import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { DarkModeToggle } from "../components/DarkModeToggle";

const meta: Meta<typeof DarkModeToggle> = {
  title: "Components/DarkModeToggle",
  component: DarkModeToggle,
};

export default meta;
type Story = StoryObj<typeof DarkModeToggle>;

export const Default: Story = {};
