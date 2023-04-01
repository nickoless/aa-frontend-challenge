import { useContext } from 'react';

import { ImageAPIContext } from 'context/ImageAPIContext';

const useDeleteImage = () => {
    const { images, setImages } = useContext(ImageAPIContext);

    const deleteImage = (imageId: string) => {
        const updatedImages = images.filter((image) => image.id !== imageId);

        setImages(updatedImages);
    };

    return { deleteImage };
};

export default useDeleteImage;
