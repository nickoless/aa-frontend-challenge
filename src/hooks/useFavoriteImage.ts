import { useContext } from 'react';

import { ImageAPIContext } from 'context/ImageAPIContext';

const useFavoriteImage = () => {
    const { images, setImages } = useContext(ImageAPIContext);

    const favoriteImage = (imageId) => {
        const updatedImages = images.map((image) => {
            if (image.id === imageId) {
                return { ...image, favorited: !image.favorited };
            }

            return image;
        });

        setImages(updatedImages);
    };

    return { favoriteImage };
};

export default useFavoriteImage;
