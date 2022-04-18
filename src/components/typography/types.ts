import { Typography as AntTypography } from "antd";
import React from "react";

export type TitleProps = React.ComponentProps<typeof AntTypography["Title"]>;
export type ParagraphProps = React.ComponentProps<
  typeof AntTypography["Paragraph"]
>;
export type TextgraphProps = React.ComponentProps<typeof AntTypography["Text"]>;

export type SharedTypographyProps = {
  fontWeight?: 400 | 500 | 600;
};

export type TypographyProps = SharedTypographyProps &
  (
    | ({
        type: "h1" | "h2" | "h3" | "h4";
      } & Omit<TitleProps, "type">)
    | ({
        type: "body";
      } & Omit<ParagraphProps, "type">)
    | ({
        type: "label";
      } & Omit<TextgraphProps, "type">)
  );
