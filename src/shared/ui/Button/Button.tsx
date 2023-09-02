import React, { ButtonHTMLAttributes, memo, ReactNode } from "react";

import { classNames } from '@/shared/lib/classNames/classNames'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  className?: string
  label?: string | null
}

const Button = memo((props: ButtonProps) => {
  const { children, className, label, } = props;

  return (
    <button
      {...props}
      className={classNames("btn", {}, [className])}
    >
      {label}
      {children}
    </button>
  );
});

export { Button };
