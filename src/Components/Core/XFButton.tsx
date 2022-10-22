import React from 'react';
import classNames from 'classnames';
import { ButtonVariants } from '../../types';

type ButtonType = 'submit' | 'reset' | 'button';

export interface XFButtonProps {
  children: string;
  variant?: ButtonVariants;
  onClick?: () => void;
  disabled?: boolean;
  type?: ButtonType;
}

const XFButton: React.FC<XFButtonProps> = ({
  children = '',
  variant = 'primary',
  onClick,
}) => {
  const variantClassMap: { [key in ButtonVariants]: string } = {
    primary: 'bg-darkGray',
    secondary: 'bg-lightGray',
  };

  return (
    <button
      className={classNames(
        'p-2 block rounded hover:opacity-80 text-white',
        variantClassMap[variant],
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default XFButton;
