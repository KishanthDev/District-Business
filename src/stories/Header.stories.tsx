import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <h1 className="text-xl font-bold">District₹ Com</h1>
      <nav className="space-x-4">
        <a href="#" className="text-gray-600">Home</a>
        <a href="#" className="text-gray-600">Sellers</a>
        <a href="#" className="text-gray-600">Buyers</a>
        <a href="#" className="text-gray-600">Advertising</a>
        <a href="#" className="text-gray-600">Blog</a>
        <a href="#" className="text-gray-600">Contact</a>
      </nav>
      <div className="space-x-2">
        <Button variant="outline">Login</Button>
        <Button>Sign Up</Button>
      </div>
    </header>
  );
};

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {};
