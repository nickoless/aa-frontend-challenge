import { useContext, useEffect, useCallback } from 'react';
import styled from 'styled-components';

import { ImageAPIContext } from 'context/ImageAPIContext';
import Image from './Image';
import { sortImages } from 'utils';
import { ImageSortContext } from 'context/ImageSortContext';
import { ImageIdContext } from 'context/ImageIdContext';

const GalleryItems = () => {
    const { images, isLoading } = useContext(ImageAPIContext);
    const { sort } = useContext(ImageSortContext);
    const { imageId, setImageId } = useContext(ImageIdContext);

    const sortedImages = useCallback(() => {
        if (!images) return;

        const favoritedImages = [...images].filter((image) => image.favorited);
        const recentImages = sortImages([...images]);

        if (sort === 'favorited') return favoritedImages;
        else return recentImages;
    }, [images, sort]);

    // Select first image in sorted array as default on init or if selected image is removed
    useEffect(() => {
        if (!images || !sortedImages) return;

        const imageMatch = images.find((image) => image.id === imageId);
        const hasImages = sortedImages().length > 0;

        if (!imageMatch && hasImages) setImageId(sortedImages()[0].id);
        else if (!hasImages) setImageId(null);
    }, [images, sortedImages, imageId, setImageId]);

    return (
        <GalleryItemsEl>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                sortedImages().map((image) => <Image key={image.url} image={image} />)
            )}
        </GalleryItemsEl>
    );
};

export default GalleryItems;

// STYLES

const GalleryItemsEl = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
`;
