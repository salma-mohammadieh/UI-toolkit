import { MdCheckbox } from '@material/web/checkbox/checkbox';
import { createComponent } from '@lit/react';
import PropTypes from 'prop-types';
import React from 'react';

const Checkbox = createComponent({
  tagName: 'md-checkbox',
  elementClass: MdCheckbox,
  react: React,
});

const CheckBox = ({ ...props }) => {
  console.log(props)
  return props.label ? (
    <>
      <label htmlFor={props.label}>{props.label}</label>
      <Checkbox
        touch-target="wrapper"
        id={props.label}
        {...props}
      ></Checkbox>
    </>
  ) : (
    <Checkbox
      touch-target="wrapper"
      {...props}
    ></Checkbox>
  );
};

CheckBox.defaultProps = {
  ariaLabel: '',
  checked: false,
  className: '',
  disabled: false,
  indeterminate: false,
  label: '',
  required: false,
  value: 'on',
};

CheckBox.propTypes = {
  /**
   * checkbox aria-label
   */
  ariaLabel: PropTypes.string,
  /**
   * If true the checkbox is selected
   */
  checked: PropTypes.bool,
  /**
   * Styles class name
   */
  className: PropTypes.string,
  /**
   * If true the checkbox is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If true the checkbox is indeterminate.
   */
  indeterminate: PropTypes.bool,
  /**
   * Checkbox label
   */
  label: PropTypes.string,
  /**
   * If true the checkbox is required to be selected when participating in form submission.
   */
  required: PropTypes.bool,
  /**
   * Checkbox value
   */
  value: PropTypes.string,
};

export default CheckBox;
