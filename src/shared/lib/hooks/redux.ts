import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { StateSchema, AppDispatch } from '@/app/providers/StoreProvider';

const useAppSelector: TypedUseSelectorHook<StateSchema> = useSelector;
const useAppDispatch = () => useDispatch<AppDispatch>();

export { useAppSelector, useAppDispatch };
