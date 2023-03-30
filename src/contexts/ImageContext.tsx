import { createContext, useState, SetStateAction } from 'react';

const ImageContext = createContext<{
    image: number;
    setImage: SetStateAction<number>;
}>({
    image: 0,
    setImage: () => {}
});

const ImageContextProvider = ({ children }) => {
    const [image, setImage] = useState(0);

    console.log('image', image);

    return (
        <ImageContext.Provider
            value={{ image: image, setImage: () => setImage }}
        >
            {children}
        </ImageContext.Provider>
    );
};

export { ImageContext, ImageContextProvider };
