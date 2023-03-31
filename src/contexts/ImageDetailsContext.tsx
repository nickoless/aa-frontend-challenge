import { createContext, Dispatch, SetStateAction, useState } from 'react';
import { Image } from './ImagesContext';

interface ImageDetailsContextType {
    imageDetails: Image | null;
    setImageDetails: Dispatch<SetStateAction<Image>>;
    section: 'recent' | 'favourite';
    setSection: Dispatch<SetStateAction<'recent' | 'favourite'>>;
}

const ImageDetailsContext = createContext<ImageDetailsContextType>({
    imageDetails: null,
    setImageDetails: () => {},
    section: 'recent',
    setSection: () => {}
});

const ImageDetailsContextProvider = ({ children }) => {
    const [imageDetails, setImageDetails] = useState(null);
    const [section, setSection] = useState<'recent' | 'favourite'>('recent');

    return (
        <ImageDetailsContext.Provider
            value={{ imageDetails, setImageDetails, section, setSection }}
        >
            {children}
        </ImageDetailsContext.Provider>
    );
};

export { ImageDetailsContext, ImageDetailsContextProvider };
