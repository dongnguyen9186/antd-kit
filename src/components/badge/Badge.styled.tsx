import React from "react";
import { Badge } from "antd";
import styled from "styled-components";
import { SIZE } from "./types";

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
`;

export default StyledBadge;
