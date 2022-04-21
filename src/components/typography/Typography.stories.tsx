import { Typography } from "antd";

export default {
  title: "3. Components/Typography",
  component: Typography,
};

export const H1 = () => (
  <Typography.Title level={1}>This is h1</Typography.Title>
);

export const H2 = () => (
  <Typography.Title level={2}>This is h1</Typography.Title>
);

export const H3 = () => (
  <Typography.Title level={3}>This is h1</Typography.Title>
);

export const H4 = () => (
  <Typography.Title level={4}>This is h1</Typography.Title>
);

export const Body = () => (
  <Typography.Paragraph>This is body</Typography.Paragraph>
);

export const Label = () => <Typography.Text>This is label</Typography.Text>;
