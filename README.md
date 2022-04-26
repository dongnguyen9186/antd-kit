# Workflow and basic structure

```
- saleshood-ui
  |
  |- components
  | |
  | |- typography
  |   |- Typography.stories.tsx
  |- themes
  | |
  | |- components
  | | |- typography.less
  | | |- badge.less
  | |- palette.less
  | |- variables.less
  | |- themes.less // import all less files here
  |
  |- index.ts // re-export all components and interfaces from 'antd'
```

- We will re-export all components from antd, only customize the style of the components using `less` files.

- Add `less` file for each component to customize styles in `themes/components`.

- Write stories for each component for all cases in the design.
