import { createContext, Dispatch, SetStateAction, useState } from 'react';
import { Sort } from 'components/commonTypes';

interface ImageSortContextType {
    sort: Sort;
    setSort: Dispatch<SetStateAction<string>>;
}

const ImageSortContext = createContext<ImageSortContextType>({
    sort: 'recent',
    setSort: () => {}
});

const ImageSortContextProvider = ({ children }) => {
    const [sort, setSort] = useState<Sort>('recent');

    return (
        <ImageSortContext.Provider value={{ sort, setSort }}>{children}</ImageSortContext.Provider>
    );
};

export { ImageSortContext, ImageSortContextProvider };
