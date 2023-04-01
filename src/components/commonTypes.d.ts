import { Dispatch, SetStateAction } from 'react';

export type Sort = 'recent' | 'favorited';
export type SetSort = Dispatch<SetStateAction<Sort>>;
