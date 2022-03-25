import React from "react";
import PropTypes from 'prop-types';
import { ButtonProps } from "antd";
import stylePropType from 'react-style-proptype';
import { StyledButton } from './Button.styles';

const Button = ({
  type,
  onClick,
  icon,
  loading,
  block,
  children,
  className,
  style,
  size,
  disabled,
  shape,
  htmlType,
  id,
  danger,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      icon={icon}
      loading={loading}
      block={block}
      className={className}
      style={style}
      size={size}
      id={id}
      disabled={disabled}
      shape={shape}
      htmlType={htmlType}
      danger={danger}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

Button.Group = StyledButton.Group;

export default Button;

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'default', 'danger', 'link']),
  size: PropTypes.oneOf(['small', 'large', 'default']),
  shape: PropTypes.oneOf(['circle', 'round', null]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  loading: PropTypes.bool,
  block: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  style: stylePropType,
  htmlType: PropTypes.string,
  id: PropTypes.string,
  danger: PropTypes.bool,
};

Button.defaultProps = {
  onClick: () => {},
  type: 'default',
  size: 'default',
  icon: null,
  shape: null,
  loading: false,
  block: false,
  children: null,
  disabled: false,
  className: '',
  style: {},
  id: undefined,
  htmlType: 'button',
  danger: false,
};