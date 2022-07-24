import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { bindActionCreators } from 'redux'
import type { RootState, AppDispatch } from "./store";
import * as AllActions from './importActions';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useActions = () => {
	const dispatch = useAppDispatch();

	return bindActionCreators(AllActions, dispatch);
};