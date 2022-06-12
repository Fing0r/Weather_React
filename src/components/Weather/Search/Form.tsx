import {FormEvent} from "react";
import {ICitySearchForm} from "../../types/Weather";
import Input from "../../UI/Input";
import ButtonSearch from "./Button";
import useInput from "../../../hooks/useInput";

function CitySearchForm({setSelectedCity}: ICitySearchForm) {
    const [cityName, onChangeCityName, clearCityName] = useInput("");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setSelectedCity(cityName);
        clearCityName();
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
