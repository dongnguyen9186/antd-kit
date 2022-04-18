import React from "react";
import { TypographyProps } from "./types";
import { Paragraph, Text, Title } from "./Typography.styled";

const Typography: React.FC<TypographyProps> = ({ type = "body", ...props }) => {
  if (type === "body") {
    return <Paragraph fontWeight={600} {...props} as="h5" />;
  }
  if (type === "label") {
    return <Text fontWeight={600} {...props} />;
  }
  const level = Number(type.replace("h", "")) as any;
  return <Title fontWeight={600} level={level} {...props} />;
};

export default Typography;
