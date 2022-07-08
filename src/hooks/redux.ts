import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { IRootState } from "@/types/store";
import { AppDispatch } from "@/store/store";

const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
const useAppDispatch: () => AppDispatch = useDispatch;

export { useAppSelector, useAppDispatch };
