import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { SampleComponent as Component } from './SampleComponent';

type Props = React.ComponentProps<typeof Component>;
const defaultProps = {} satisfies Props;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: Component,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Component>;

export const Docs: StoryObj<typeof Component> = {
  args: {
    ...defaultProps,
  },
};
