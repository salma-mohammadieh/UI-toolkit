import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createComponent } from '@lit/react';
import '@material/web/icon/icon';
import '@material/web/iconbutton/icon-button';
import { MdPrimaryTab } from '@material/web/tabs/primary-tab';
import { MdSecondaryTab } from '@material/web/tabs/secondary-tab';
import { MdTabs } from '@material/web/tabs/tabs';

const sharedKeys = {
  react: React,
  events: {
    onChange: 'change',
  },
};

export const TabsComponent = createComponent({
  ...sharedKeys,
  tagName: 'md-tabs',
  elementClass: MdTabs,
});

export const PrimaryTab = createComponent({
  ...sharedKeys,
  tagName: 'md-primary-tab',
  elementClass: MdPrimaryTab,
});

export const SecondaryTab = createComponent({
  ...sharedKeys,
  tagName: 'md-secondary-tab',
  elementClass: MdSecondaryTab,
});

const tabVariant = {
  primary: PrimaryTab,
  secondary: SecondaryTab,
};

const Tabs = ({
  activeTabIndex,
  autoActivate,
  onChange,
  variant,
  tabsContent,
}) => {
  const [activeTab, setActiveTab] = useState(activeTabIndex);

  const TabComponent = tabVariant[variant];

  const handleTabClick = (index) => {
    setActiveTab(index);
    onChange(index);
  };

  return (
    <TabsComponent
      activeTabIndex={1}
      autoActivate={autoActivate}
      onChange={onChange}
    >
      {tabsContent.map((tab, index) => (
        <TabComponent
          key={index}
          active={activeTab === index}
          onClick={() => handleTabClick(index)}
          iconOnly={tab.iconOnly}
          hasIcon={tab.hasIcon}
        >
          {tab.hasIcon && tab.icon}
          {!tab.iconOnly && tab.text}
        </TabComponent>
      ))}
    </TabsComponent>
  );
};

Tabs.defaultProps = {
  activeTabIndex: 0,
  autoActivate: false,
  selected: false,
  iconOnly: false,
  hasIcon: false,
  active: true,
  icon: <></>,
  inlineIcon: false,
  onChange: () => {},
  tabsContent: [],
  variant: 'primary',
};

Tabs.propTypes = {
  /**
   * Index of the initially active tab.
   */
  activeTabIndex: PropTypes.number,

  /**
   * Whether or not to automatically select a tab when it is focused.
   */
  autoActivate: PropTypes.bool,

  /**
   * Fired when the selected tab changes. The target's selected or selectedItem and previousSelected or previousSelectedItem provide information about the selection change. The change event is fired when a user interaction like a space/enter key or click cause a selection change. The tab selection based on these actions can be cancelled by calling preventDefault on the triggering keydown or click event.
   */
  onChange: PropTypes.func,

  /**
   * An array of objects representing the tabs to be rendered.
   * Each object should have properties:
   *   - active (boolean, optional): Indicates if the tab is initially active.
   *   - icon (element, optional): The icon element to be displayed alongside the tab text.
   *   - iconOnly (boolean, optional): Indicates if only the icon should be displayed (no text).
   *   - text (string, required): The text to be displayed on the tab.
   */
  tabsContent: PropTypes.arrayOf(
    PropTypes.shape({
      active: PropTypes.bool,
      icon: PropTypes.element,
      iconOnly: PropTypes.bool,
      text: PropTypes.string.isRequired,
    })
  ),

  /**
   * Variant of the tabs component. Can be either 'primary' or 'secondary'.
   */
  variant: PropTypes.oneOf(['primary', 'secondary']),
};

export default Tabs;
