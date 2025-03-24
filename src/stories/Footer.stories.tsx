import React from "react";
import { Meta, StoryObj } from "@storybook/react";

const Footer = () => {
  return (
    <footer className="text-center p-4 bg-gray-800 text-white">
      <p>© 2024-2025 District Business Pvt. Ltd. All Rights Reserved.</p>
      <p>Terms of Use | Contact: support@district-business.com</p>
    </footer>
  );
};

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {};
