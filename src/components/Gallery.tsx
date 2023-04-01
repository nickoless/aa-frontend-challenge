import styled from 'styled-components';

import { ImageAPIContextProvider } from 'context/ImageAPIContext';
import { ImageIdContextProvider } from 'context/ImageIdContext';
import { ImageSortContextProvider } from 'context/ImageSortContext';
import { theme } from 'globalStyle';
import GalleryHeader from './GalleryHeader';
import GalleryItems from './GalleryItems';
import ImagePanel from './ImagePanel';

const Gallery = () => {
    return (
        <ImageAPIContextProvider>
            <ImageIdContextProvider>
                <ImageSortContextProvider>
                    <GalleryEl>
                        <GalleryWrapper>
                            <GalleryHeader />
                            <GalleryItems />
                        </GalleryWrapper>
                        <ImagePanel />
                    </GalleryEl>
                </ImageSortContextProvider>
            </ImageIdContextProvider>
        </ImageAPIContextProvider>
    );
};

export default Gallery;

// STYLES

const GalleryEl = styled.div`
    display: flex;
`;

const GalleryWrapper = styled.main`
    flex: 3;
    margin-right: 600px;
    padding: 3rem;
    background: ${theme.backgroundPrimary};
    height: 100%;
`;
