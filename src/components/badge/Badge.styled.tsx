import React from 'react';
import { Badge } from 'antd';
import styled from 'styled-components';

const calcSize = (dotSize) => {
  switch (dotSize) {
    case 'small':
      return '6px';
    case 'medium':
      return '10px';
    default:
      return '16px';
  }
};

const StyledBadge = styled(({ dotSize, ...props }) => <Badge {...props} />)`
  ${({ dot, dotSize }) =>
    dot &&
    `
    .ant-badge-dot {
      width: ${calcSize(dotSize)};
      height: ${calcSize(dotSize)};
    }

    .ant-badge-status-dot {
      width: ${calcSize(dotSize)};
      height: ${calcSize(dotSize)};
    }
  `}
`;

export default StyledBadge;
