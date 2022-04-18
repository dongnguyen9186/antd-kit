import Typography from "./Typography";
import { TypographyProps } from "./types";
import { Story } from "@storybook/react";

export default {
  title: "3. Components/Typography",
  component: Typography,
};

const Template: Story<TypographyProps> = (args) => <Typography {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: "Hello world",
  type: "h1",
};
