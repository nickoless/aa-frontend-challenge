import { Dispatch, SetStateAction } from 'react';

export interface Image {
    createdAt: string;
    description?: string;
    dimensions: { height: number; width: number };
    favorited: boolean;
    filename: string;
    id: string;
    resolution: { height: number; width: number };
    sharedWith: [];
    sizeInBytes: number;
    updatedAt: string;
    uploadedBy: string;
    url: string;
}

export type Sort = 'recent' | 'favorited';
export type SetSort = Dispatch<SetStateAction<Sort>>;
