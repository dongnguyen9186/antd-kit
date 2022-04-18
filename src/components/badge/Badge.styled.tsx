import React from "react";
import { Badge } from "antd";
import styled from "styled-components";
import { SIZE } from "./types";
import PALETTE from "../../theming/palette";

const SMALL = '6px';
const MEDIUM = '10px';
const LARGE = '16px';

const calcSize = (dotSize: SIZE) => {
  switch (dotSize) {
    case "small":
      return SMALL;
    case "medium":
      return MEDIUM;
    default:
      return LARGE;
  }
};

export const getColor = (type: string) => {
  switch (type) {
    case "primary":
      return {
        bg: PALETTE.blue[500],
        text: "#fff",
      };
    case "secondary":
      return {
        bg: PALETTE.blue[100],
        text: PALETTE["dark-blue"][700],
      };
    case "danger":
      return {
        bg: PALETTE.red[400],
        text: "#fff",
      };
    case "success":
      return {
        bg: PALETTE.green[600],
        text: "#fff",
       };
    default:
      return {
        bg: PALETTE['dark-blue'][200],
        text: PALETTE['dark-blue'][400],
      };
  }
}

const StyledBadge = styled(({ dotSize, ...props }) => <Badge {...props} />)`
  ${({ dot, dotSize }: { dot: boolean | undefined; dotSize: SIZE }) =>
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

  .ant-badge {
    padding: 0 8px;
  }

  .ant-badge-count {
    height: 17px;
    width: 38px;
  }
`;

export default StyledBadge;
