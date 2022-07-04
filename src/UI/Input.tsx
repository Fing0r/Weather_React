import { FC, HTMLProps } from "react";

const Input: FC<HTMLProps<HTMLInputElement>> = ({ value, onChange, type, placeholder }) => {
    return (
        <label className='search__label'>
            <input
                className='search__input'
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required
            />
        </label>
    );
};

export default Input;
