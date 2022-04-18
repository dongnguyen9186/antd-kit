import {
  withKnobs,
  number,
  boolean,
  select,
  text,
} from "@storybook/addon-knobs";
import Badge from "./Badge";

export default {
  title: "3. Components/Badge",
  component: Badge,
  decorators: [withKnobs],
};

export const count = () => (
  <Badge
    type={select(
      "type",
      ["primary", "secondary", "danger", "default", 'success'],
      "primary"
    )}
    count={number("count", 100)}
    showZero={boolean("showZero", false)}
    overflowCount={number("overflowCount", 99)}
  />
);

export const dot = () => (
  <Badge
    dot
    type={select(
      "type",
      ["primary", "secondary", "danger", "default", "success"],
      "primary"
    )}
  />
);
