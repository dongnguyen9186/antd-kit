import styled from 'styled-components';
import { Button as AntdButton } from 'antd';

export const StyledButton = styled(AntdButton)`
  &.ant-btn {
    :not(.ant-btn-circle) {
      border-radius: 6px;
    }

    &.ant-btn-icon-only {
      padding: 0;
    }

    &.secondary {
      background-color: #e5e9ef;
      & > span {
        color: #172b4d;
      }

      &:hover {
        background-color: #c8d0dc;
      }
    }
  }
`;
