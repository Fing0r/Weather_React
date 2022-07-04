import { FC } from "react";
import Button from "@/UI/Button";
import { IFavoriteCitiesItem } from "@/types/Weather";

const FavoriteCitiesItem: FC<IFavoriteCitiesItem> = ({
    label,
    getTargetWeather,
    deleteFavoriteCity,
}) => {
    const handleClickDelete = () => deleteFavoriteCity(label);
    const handleClickGetWeather = () => getTargetWeather(label);

    return (
        <li className='cities__item'>
            <Button className='cities__name' type='button' onClick={handleClickGetWeather}>
                {label}
            </Button>
            <Button className='cities__close' type='button' onClick={handleClickDelete} />
        </li>
    );
};

export default FavoriteCitiesItem;
