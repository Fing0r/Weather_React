import {ChangeEvent, useState} from "react";

function useInput(initialValue: string): [string, ((e: ChangeEvent<HTMLInputElement>) => void), (() => void)] {
    const [value, setValue] = useState(initialValue);
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
    const clearInput = () => setValue("");

    return [value, onChange, clearInput]
}

export default useInput
