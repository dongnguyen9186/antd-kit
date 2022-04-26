import React, { forwardRef } from "react";
import { Badge as AntBadge, Button } from "antd";
import { IBadgeProps } from "./types";
import * as styles from "./Badge.module.less";

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    IBadgeProps & React.RefAttributes<HTMLElement>
  > {
  Ribbon: typeof AntBadge.Ribbon;
}

const Badge: CompoundedComponent = forwardRef((props, ref) => {
  return (
    <AntBadge {...props} className={styles.badge}>
      {props.children}
    </AntBadge>
  );
}) as CompoundedComponent;

Badge.Ribbon = AntBadge.Ribbon;

Badge.defaultProps = {
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
