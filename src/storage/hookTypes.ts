import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "./reduxTypes";

//типизируем стандартные хуки под наше приложение
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
