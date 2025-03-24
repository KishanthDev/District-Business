import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const Testimonial = ({ name, quote }: { name: string; quote: string }) => {
  return (
    <Card className="w-80 p-4">
      <CardHeader>
        <p className="text-gray-800 italic">"{quote}"</p>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-right">- {name}</p>
      </CardContent>
    </Card>
  );
};

const meta: Meta<typeof Testimonial> = {
  title: "Components/Testimonial",
  component: Testimonial,
};

export default meta;
type Story = StoryObj<typeof Testimonial>;

export const MegWhitman: Story = {
  args: { name: "Meg Whitman", quote: "When people use your brand name as a verb, that is remarkable." },
};

export const KennethLay: Story = {
  args: { name: "Kenneth Lay", quote: "Our primary businesses in wholesale, utilities, and retail were all doing well." },
};

export const JimRohan: Story = {
  args: { name: "Jim Rohan", quote: "If you make an investment in a customer, you can make a fortune." },
};
