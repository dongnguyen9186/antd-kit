import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import stylePropType from "react-style-proptype";
import { Badge as AntBadge } from "antd";
import StyledBadge from "./Badge.styled";
import { IBadgeProps } from "./types";

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    IBadgeProps & React.RefAttributes<HTMLElement>
  > {
  Ribbon: typeof AntBadge.Ribbon;
}

const Badge: CompoundedComponent = forwardRef(
  (
    {
      children,
      color,
      count,
      dot,
      offset,
      showZero,
      status,
      overflowCount,
      className,
      style,
      dotSize,
    },
    ref
  ) => {
    return (
      <StyledBadge
        color={color}
        ref={ref}
        count={count}
        dot={dot}
        offset={offset}
        showZero={showZero}
        status={status}
        overflowCount={overflowCount}
        className={className}
        style={style}
        dotSize={dotSize}
      >
        {children}
      </StyledBadge>
    );
  }
) as CompoundedComponent;

Badge.Ribbon = AntBadge.Ribbon;

Badge.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  dotSize: PropTypes.oneOf(["small", "medium", "large"]),
  count: PropTypes.oneOfType([PropTypes.node, PropTypes.number]),
  dot: PropTypes.bool,
  offset: PropTypes.any,
  overflowCount: PropTypes.number,
  className: PropTypes.string,
  style: stylePropType,
};

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