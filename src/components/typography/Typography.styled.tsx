import { Typography } from "antd";
import styled from "styled-components";
import { SharedTypographyProps } from "./types";

export const Title = styled(Typography.Title)<SharedTypographyProps>`
  h1& {
    font-size: 32px;
    line-height: 40px;
    font-weight: ${(props) => props.fontWeight};
  }
  h2& {
    font-size: 28px;
    line-height: 35px;
    font-weight: ${(props) => props.fontWeight};
  }
  h3& {
    font-size: 20px;
    line-height: 25px;
    font-weight: ${(props) => props.fontWeight};
  }
  h4& {
    font-size: 16px;
    line-height: 24px;
    font-weight: ${(props) => props.fontWeight};
  }
`;

export const Paragraph = styled(Typography.Paragraph)<SharedTypographyProps>`
  font-size: 13px;
  line-height: 19px;
  font-weight: ${(props) => props.fontWeight};
`;

export const Text = styled(Typography.Text)<SharedTypographyProps>`
  font-size: 11px;
  line-height: 17px;
  font-weight: ${(props) => props.fontWeight};
`;
