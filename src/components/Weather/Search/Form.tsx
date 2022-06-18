import {FC, FormEvent} from "react";
import Input from "../../UI/Input";
import ButtonSearch from "./Button";
import useInput from "@/hooks/useInput";
import {useDispatch} from "react-redux";
import {selectedCity} from "@/store/actionsCreators";

const CitySearchForm: FC = () => {
    const [cityName, onChangeCityName, clearCityName] = useInput("");
    const dispatch = useDispatch();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        dispatch(selectedCity(cityName));
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
