import React from 'react';
import cn from 'classnames';
import './Button.css';

const Button = ({ className, children, ...props }) => (
  <button className={cn('Button', className)} {...props}>
    {children}
  </button>
);

export default Button;
