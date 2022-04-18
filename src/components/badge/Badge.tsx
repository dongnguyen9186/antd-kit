import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import stylePropType from "react-style-proptype";
import { Badge as AntBadge } from "antd";
import StyledBadge, { getColor } from "./Badge.styled";
import { IBadgeProps } from "./types";
import DEFAULT_THEME from "../../theming/theme";

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    IBadgeProps & React.RefAttributes<HTMLElement>
  > {
  Ribbon: typeof AntBadge.Ribbon;
}

const Badge: CompoundedComponent = forwardRef((props, ref) => {
  return (
    <StyledBadge
      {...props}
      ref={ref}
      style={{
        backgroundColor: getColor(props.type || "default").bg,
        color: getColor(props.type || "default").text,
        fontWeight: DEFAULT_THEME.fontWeights.semibold,
        fontSize: DEFAULT_THEME.fontSizes.xs,
        lineHeight: DEFAULT_THEME.lineHeights.xs,
        ...props.style,
      }}
    >
      {props.children}
    </StyledBadge>
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
