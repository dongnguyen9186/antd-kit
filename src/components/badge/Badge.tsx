import React, { forwardRef } from "react";
import { Badge as AntBadge, Button } from "antd";
import { IBadgeProps } from "./types";
import "./Badge.less";

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    IBadgeProps & React.RefAttributes<HTMLElement>
  > {
  Ribbon: typeof AntBadge.Ribbon;
}

const colors = {
  secondary: {
    bg: "#DEE8F7",
    text: "#172B4D",
  },
  primary: {
    bg: "#2D6EC8",
    text: "#FFFFFF",
  },
  danger: {
    bg: "#D44020",
    text: "#FFFFFF",
  },
};

const Badge: CompoundedComponent = forwardRef((props, ref) => {
  return (
    <AntBadge
      {...props}
      style={{
        background: colors[props?.type || "primary"].bg,
        color: colors[props?.type || "primary"].text,
        fontWeight: 600,
      }}
    >
      {props.children}
    </AntBadge>
  );
}) as CompoundedComponent;

Badge.Ribbon = AntBadge.Ribbon;

Badge.defaultProps = {
  type: "primary",
  children: null,
  color: undefined,
  dotSize: "medium",
  count: undefined,
  dot: false,
  offset: undefined,
  showZero: false,
  status: undefined,
  overflowCount: 99,
  className: "",
  style: undefined,
};
export default Badge;
