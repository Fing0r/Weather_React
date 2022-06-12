import {ChangeEvent, FormEvent, useState} from "react";
import {ICitySearchForm} from "../../types/Weather";
import Input from "../../UI/Input";
import ButtonSearch from "./Button";

interface IUseInput {
    value: string
    onChange:  (e: ChangeEvent<HTMLInputElement>) => void
    clearInput: () => void
}

function useInput(): [IUseInput] {
    const [value, setValue] = useState("");

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const city = e.target.value;
        setValue(city)
    }
    const clearInput = () => setValue("");

    return [value, onChange, clearInput]
}

function CitySearchForm({setSelectedCity}: ICitySearchForm) {
    const [cityName, onChangeCityName, clearCityName] = useInput();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setSelectedCity(cityName);
        clearCityName()
        // setCityName("");
    }

    return (
        <form className="search" onSubmit={handleSubmit}>
            <Input
                placeholder="Enter the name of the city"
                value={cityName}
                onChange={onChangeCityName}
                type="search"
            />
            <ButtonSearch/>
        </form>
    )
}

export default CitySearchForm
