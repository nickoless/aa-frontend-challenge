import { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Image } from 'components/commonTypes';

interface ImageAPIContextType {
    images: Image[];
    setImages: Dispatch<SetStateAction<Image[]>>;
    isLoading: boolean;
}

const ImageAPIContext = createContext<ImageAPIContextType>({
    images: null,
    setImages: () => {},
    isLoading: true
});

const ImageAPIContextProvider = ({ children }) => {
    const [images, setImages] = useState<Image[]>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        if (images) return;

        const fetchData = async () => {
            try {
                const url = 'https://agencyanalytics-api.vercel.app/images.json';
                const response = await fetch(url);

                if (!response.ok) {
                    const message = `An error has occured: ${response.status}`;
                    throw new Error(message);
                }

                const data = await response.json();
                setImages(data);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [images]);

    return (
        <ImageAPIContext.Provider
            value={{
                images: images,
                setImages: setImages,
                isLoading: isLoading
            }}
        >
            {children}
        </ImageAPIContext.Provider>
    );
};

export { ImageAPIContext, ImageAPIContextProvider };
