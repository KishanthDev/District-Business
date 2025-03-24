import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Feautres } from "../components/Feautres";

const meta: Meta<typeof Feautres> = {
  title: "Components/Features",
  component: Feautres,
};

export default meta;
type Story = StoryObj<typeof Feautres>;

export const Default: Story = {};
