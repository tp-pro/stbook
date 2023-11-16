import { createFooter } from './Footer';

export default {
  title: 'Example/Footer',
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/html/writing-docs/autodocs
  tags: ['autodocs'],
  render: (args) => createFooter(args),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/html/configure/story-layout
    layout: 'fullscreen',
  },
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    onLogin: { action: 'onLogin' },
    onLogout: { action: 'onLogout' },
    onCreateAccount: { action: 'onCreateAccount' },
  },
};

export const LoggedIn = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};

export const LoggedOut = {};
