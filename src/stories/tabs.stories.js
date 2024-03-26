import React from 'react';
import Tabs from '../components/tabs';

export default {
  title: 'Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <Tabs {...args}> </Tabs>;

export const TabsComponent = Template.bind({});
TabsComponent.args = {
  activeTabIndex: 1,
  variant: 'secondary',
  tabsContent: [
    {
      text: 'tab 1',
      active: true,
    },
    {
      text: 'tab 2',
      icon: (
        <svg slot="icon" viewBox="0 0 48 48">
          <path d="M6 40V8l38 16Zm3-4.65L36.2 24 9 12.5v8.4L21.1 24 9 27Zm0 0V12.5 27Z" />
        </svg>
      ),
      hasIcon: true,
      iconOnly: false,
    },
  ],
  onChange: () => {
    console.log('tab changed');
  },
};
