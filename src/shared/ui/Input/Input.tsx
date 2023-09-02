import { InputHTMLAttributes, memo } from 'react';

import cls from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = memo((props: InputProps) => {
  return (
    <label className={cls.label} htmlFor={props.name}>
      <input {...props} className={cls.input} />
    </label>
  );
});

export { Input };
