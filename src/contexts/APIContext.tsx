import { createContext, useEffect, useState } from 'react';

interface Image {
    createdAt: Date;
    description: string;
    dimensions: { height: number; width: number };
    favorited: boolean;
    filename: string;
    id: string;
    resolution: { height: number; width: number };
    sharedWith: [];
    sizeInBytes: number;
    updatedAt: Date;
    uploadedBy: string;
    url: string;
}

const APIContext = createContext<{ data: Image[]; isLoading: boolean }>({
    data: [],
    isLoading: true
});

const APIContextProvider = ({ children }) => {
    const [images, setImages] = useState<Image[]>(null);
    const [isLoading, setIsLoading] = useState<boolean>(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const url = 'https://agencyanalytics-api.vercel.app/images.json';
            const response = await fetch(url);
            const data = await response.json();

            setImages(data);
            setIsLoading(false);
        };

        fetchData().catch(console.error);
    }, []);

    return (
        <APIContext.Provider value={{ data: images, isLoading: isLoading }}>
            {children}
        </APIContext.Provider>
    );
};

export { APIContext, APIContextProvider };
