import { BadgeProps as AntdBadgeProps, Badge } from "antd";
export type SIZE = "small" | "medium" | "large" | null | undefined;

export interface IBadgeProps extends AntdBadgeProps {
  children?: React.ReactNode,
  dotSize?: SIZE,
  type?: 'primary' | 'secondary' | 'danger' | 'default' | 'success'
}
