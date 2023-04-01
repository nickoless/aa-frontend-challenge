import { createContext, Dispatch, SetStateAction, useState } from 'react';

interface ImageIdContextType {
    imageId: string;
    setImageId: Dispatch<SetStateAction<string>>;
}

const ImageIdContext = createContext<ImageIdContextType>({
    imageId: null,
    setImageId: () => {}
});

const ImageIdContextProvider = ({ children }) => {
    const [imageId, setImageId] = useState(null);

    return (
        <ImageIdContext.Provider value={{ imageId, setImageId }}>
            {children}
        </ImageIdContext.Provider>
    );
};

export { ImageIdContext, ImageIdContextProvider };
