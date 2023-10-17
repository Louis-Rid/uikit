import type { Preview, StoryFn } from "@storybook/react";
import React from "react";

import "./preview.css"

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'Dark',
      values: [
        { name: 'Dark', value: '#000', },
        { name: 'Light', value: '#f5f5f5', },
      ],
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
