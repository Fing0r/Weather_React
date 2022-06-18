import {TypedUseSelectorHook, useSelector} from "react-redux"
import {IRootState} from "@/store/types";

const useTypedSelector: TypedUseSelectorHook<IRootState> = useSelector;

export {useTypedSelector}
