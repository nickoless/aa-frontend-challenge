import { ImagesContext } from 'contexts/ImagesContext';
import { ImageDetailsContext } from 'contexts/ImageDetailsContext';
import { theme } from 'globalStyle';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from './Image';

const Gallery = () => {
    const [sort, setSort] = useState<'recent' | 'favorite'>('recent');
    const { images, isLoading } = useContext(ImagesContext);
    const { setImageDetails, imageDetails } = useContext(ImageDetailsContext);

    const sortedImages =
        !isLoading &&
        images?.sort(
            (a, b) =>
                new Date(b?.createdAt).getTime() -
                new Date(a?.createdAt).getTime()
        );

    const favoriteImages =
        sortedImages && sortedImages.filter((image) => image.favorited);

    useEffect(() => {
        if (sortedImages && !imageDetails) {
            setImageDetails(sortedImages[0]);
        }
    }, [sortedImages]);

    return (
        <GalleryEl>
            <h1>Photos</h1>
            <Sort>
                <SortOption
                    $selected={sort === 'recent'}
                    onClick={() => setSort('recent')}
                >
                    Recently Added
                </SortOption>
                <SortOption
                    $selected={sort === 'favorite'}
                    onClick={() => setSort('favorite')}
                >
                    Favorite
                </SortOption>
            </Sort>
            <Images>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        {sort === 'recent' &&
                            sortedImages.map((image) => (
                                <Image key={image.url} image={image} />
                            ))}
                        {sort === 'favorite' &&
                            favoriteImages.map((image) => (
                                <Image key={image.url} image={image} />
                            ))}
                    </>
                )}
            </Images>
        </GalleryEl>
    );
};

export default Gallery;

// STYLES

const GalleryEl = styled.main`
    flex: 3;
    margin-right: 600px;
    padding: 3rem;
    background: ${theme.backgroundSecondary};
`;

const Images = styled.section`
    display: flex;
    flex-wrap: wrap;
    /* justify-content: center; */
    gap: 3rem;
`;

const Sort = styled.nav`
    height: 60px;
    display: flex;
    gap: 3rem;
`;

const SortOption = styled.div<{ $selected: boolean }>`
    cursor: pointer;
    height: 50px;
    ${({ $selected }) => $selected && 'border-bottom: 2px solid pink'};
`;
