import { BadgeProps as AntdBadgeProps, Badge } from "antd";
type SIZE = "small" | "medium" | "large" | null | undefined;

export interface IBadgeProps extends AntdBadgeProps {
  children?: React.ReactNode,
  dotSize?: SIZE,
}
