import { createFooter } from './Footer';

export default {
  title: 'Example/Footer',
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/html/writing-docs/autodocs
  tags: ['autodocs'],
  render: (args) => createFooter(args),

  argTypes: {
    backgroundColor: { control: 'color' },
    primary: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['full', 'medium'],
    },
  },
};

export const Full = {
    args: {
      size: 'full',
    },
  };
  
  export const Medium = {
    args: {
      size: 'medium',
    },
  };


