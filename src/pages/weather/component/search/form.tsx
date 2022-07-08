import React, { FC, FormEvent } from "react";
import Input from "@/ui/input";
import { ButtonSearch } from "./component";
import useInput from "@/hooks/useInput";
import { selectedCity } from "@/store/reducers/citiesSlice";
import { useAppDispatch } from "@/hooks/redux";

const CitySearchForm: FC = () => {
    const [cityName, onChangeCityName, clearCityName] = useInput("");
    const dispatch = useAppDispatch();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        dispatch(selectedCity(cityName));
        clearCityName();
    };

    return (
        <form className='search' onSubmit={handleSubmit}>
            <Input
                placeholder='Enter the name of the city'
                value={cityName}
                onChange={onChangeCityName}
                type='search'
            />
            <ButtonSearch />
        </form>
    );
};

export { CitySearchForm };
