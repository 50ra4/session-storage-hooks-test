import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Button as Component } from './Button';

type Props = React.ComponentProps<typeof Component>;
const defaultProps = {
  label: 'Button',
} satisfies Props;

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

export const Primary: StoryObj<typeof Component> = {
  args: {
    ...defaultProps,
    primary: true,
  },
};

export const Secondary: StoryObj<typeof Component> = {
  args: {
    ...defaultProps,
  },
};

export const Large: StoryObj<typeof Component> = {
  args: {
    ...defaultProps,
    size: 'large',
  },
};

export const Small: StoryObj<typeof Component> = {
  args: {
    ...defaultProps,
    size: 'small',
  },
};
