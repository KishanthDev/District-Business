import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="text-center p-12 bg-gray-100">
      <h2 className="text-3xl font-bold">Your Gateway to Commission-Free E-commerce</h2>
      <p className="text-lg text-gray-600 mt-2">Sell more, Keep more - No hidden fees.</p>
      <div className="mt-4 space-x-4">
        <Button className="bg-blue-500 hover:bg-blue-600">Start Selling</Button>
        <Button className="bg-gray-500 hover:bg-gray-600">Explore Stores</Button>
      </div>
    </section>
  );
};

const meta: Meta<typeof Hero> = {
  title: "Components/Hero",
  component: Hero,
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {};
