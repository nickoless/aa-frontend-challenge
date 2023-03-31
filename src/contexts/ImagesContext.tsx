import {
    createContext,
    useEffect,
    useState,
    Dispatch,
    SetStateAction
} from 'react';

export interface Image {
    createdAt: string;
    description: string;
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

interface ImagesContextType {
    images: Image[] | [];
    setImages: Dispatch<SetStateAction<Image[]>>;
    isLoading: boolean;
}

const ImagesContext = createContext<ImagesContextType>({
    images: [],
    setImages: () => {},
    isLoading: true
});

const ImagesContextProvider = ({ children }) => {
    const [images, setImages] = useState<Image[]>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://agencyanalytics-api.vercel.app/images.json';
            const response = await fetch(url);
            const data = await response.json();

            setImages(data);
            setIsLoading(false);
        };

        fetchData().catch(console.error);
    }, []);

    return (
        <ImagesContext.Provider
            value={{
                images: images,
                setImages: setImages,
                isLoading: isLoading
            }}
        >
            {children}
        </ImagesContext.Provider>
    );
};

export { ImagesContext, ImagesContextProvider };
