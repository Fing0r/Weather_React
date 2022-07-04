import { TypedUseSelectorHook, useSelector } from "react-redux";
import { IRootState } from "@/types/store";

const useTypedSelector: TypedUseSelectorHook<IRootState> = useSelector;

export default useTypedSelector;
