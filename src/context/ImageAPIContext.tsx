import { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react';

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
                const sortedImages = sortImages(data);

                setImages(sortedImages);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
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

const sortImages = (images) => {
    const sortedImages = images.sort(
        (a, b) => new Date(b?.createdAt).getTime() - new Date(a?.createdAt).getTime()
    );

    return sortedImages;
};
