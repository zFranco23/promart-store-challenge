import { useDispatch, useSelector } from 'react-redux'
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'

import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState } from '../modules'

export type AppThunkDispatch = ThunkDispatch<RootState, unknown, AnyAction>
export const useAppDispatch: () => AppThunkDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
