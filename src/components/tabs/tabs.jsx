import React from 'react';
import '@material/web/icon/icon';
import '@material/web/iconbutton/icon-button';
import '@material/web/tabs/tabs';
import PropTypes from 'prop-types';
import { createComponent } from '@lit/react';
import { MdPrimaryTab } from '@material/web/tabs/primary-tab';
import { MdSecondaryTab } from '@material/web/tabs/secondary-tab';

const sharedKeys = {
  react: React,
  events: {
    onClick: 'click',
  },
};

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
  selected,
  iconOnly,
  hasIcon,
  active,
  isTab,
  inlineIcon,
  onChange,
  variant,
  tabsContent = [],
}) => {
  const TabComponent = tabVariant[variant];

  return (
    <md-tabs activeTabIndex={0} onChange={onChange} tabs={['1', '2', '3']}>
      {tabsContent.map((tab, index) => (
        <TabComponent
          key={index}
          active={tab.active} // Pass the active prop from the tab object
          isTab={isTab}
          iconOnly={iconOnly}
          hasIcon={hasIcon}
        >
          {tab.icon && <md-icon>{tab.icon}</md-icon>}{' '}
          {/* Render icon if provided */}
          {tab.text}
        </TabComponent>
      ))}
    </md-tabs>
  );
};

Tabs.defaultProps = {
  selected: false,
  iconOnly: false,
  hasIcon: false,
  active: false,
  isTab: false,
  inlineIcon: false,
  onChange: () => {},
  tabsContent: [],
  variant: 'primary',
};

Tabs.propTypes = {
  selected: PropTypes.bool,
  iconOnly: PropTypes.bool,
  hasIcon: PropTypes.bool,
  active: PropTypes.bool,
  isTab: PropTypes.bool,
  inlineIcon: PropTypes.bool,
  onChange: PropTypes.func,
  tabsContent: PropTypes.arrayOf(
    PropTypes.shape({
      active: PropTypes.bool,
      icon: PropTypes.string,
      text: PropTypes.string.isRequired,
    })
  ),
  variant: PropTypes.oneOf(['primary', 'secondary']),
};

export default Tabs;
