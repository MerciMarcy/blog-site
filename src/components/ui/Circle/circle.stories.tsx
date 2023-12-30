import { Meta } from "@storybook/react";
import { Circle } from "./circle";
import { comment } from "postcss";

const meta: Meta<typeof Circle> = {
  component: Circle,
  title: "Circle"
}

export default meta;

export const BasicCircle = {};