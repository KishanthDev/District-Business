import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const FeatureCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <Card className="w-80 p-4 text-center">
      <CardHeader>
        <h3 className="text-xl font-bold">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

const meta: Meta<typeof FeatureCard> = {
  title: "Components/FeatureCard",
  component: FeatureCard,
};

export default meta;
type Story = StoryObj<typeof FeatureCard>;

export const NoCommission: Story = {
  args: { title: "0% No Sales Commissions", description: "Sell without paying extra commissions." },
};

export const Advertising: Story = {
  args: { title: "Integrated Advertising", description: "Boost your store with built-in ads." },
};
