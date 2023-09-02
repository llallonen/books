import { PayloadAction } from "@reduxjs/toolkit";

export type Reducer<T, K = void> = (state: T, action: PayloadAction<K>) => T | void;