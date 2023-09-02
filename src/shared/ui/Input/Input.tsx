import { InputHTMLAttributes, memo } from "react";
import './styles.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
}

const Input = memo((props: InputProps) => {
  return (
    <label className='label' htmlFor={props.name}>
      <input
        {...props}
        className='input'
      />
    </label>
  );
});

export { Input }
