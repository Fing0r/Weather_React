import {IInput} from "../types/UI";

function Input({value, onChange, type, placeholder}: IInput) {
    return (
        <label className="search__label">
            <input className="search__input"
                   type={type}
                   value={value}
                   onChange={onChange}
                   placeholder={placeholder}
                   required
            />
        </label>
    )
}

export default Input
