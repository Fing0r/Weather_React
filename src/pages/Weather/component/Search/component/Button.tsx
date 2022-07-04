import React, { FC } from "react";
import Button from "../../../../../UI/Button";

const ButtonSearch: FC = () => (
    <Button className='search__btn'>
        <svg width='30' height='30' fill='none'>
            <path
                opacity='0.54'
                fillRule='evenodd'
                clipRule='evenodd'
                d='M19.3775 17.5H18.385L18.04 17.1575C19.2588 15.7362 20 13.8938 20 11.875C20 7.3875 16.3625 3.75 11.875 3.75C7.3875 3.75 3.75 7.3875 3.75 11.875C3.75 16.3625 7.3875 20 11.875 20C13.8938 20 15.735 19.26 17.1563 18.0425L17.5013 18.385V19.375L23.7488 25.6137L25.6125 23.75L19.3775 17.5ZM11.875 17.5C8.76751 17.5 6.25001 14.9825 6.25001 11.875C6.25001 8.76875 8.76751 6.25 11.875 6.25C14.9813 6.25 17.5 8.76875 17.5 11.875C17.5 14.9825 14.9813 17.5 11.875 17.5Z'
                fill='currentColor'
            />
        </svg>
    </Button>
);

export default ButtonSearch;
