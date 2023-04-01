import { useContext } from 'react';
import styled from 'styled-components';

import { ImageAPIContext } from 'context/ImageAPIContext';
import { Sort } from './commonTypes';
import Image from './Image';

interface Props {
    sort: Sort;
}

const GalleryItems = ({ sort }: Props) => {
    const { images, isLoading } = useContext(ImageAPIContext);

    const favoriteImages = images && images.filter((image) => image.favorited);

    return (
        <GalleryItemsEl>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {sort === 'recent' &&
                        images.map((image, index) => <Image key={image.url} image={image} />)}
                    {sort === 'favorited' &&
                        favoriteImages.map((image, index) => (
                            <Image key={image.url} image={image} />
                        ))}
                </>
            )}
        </GalleryItemsEl>
    );
};

export default GalleryItems;

const GalleryItemsEl = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
`;
