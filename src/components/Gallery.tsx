import { useState } from 'react';
import styled from 'styled-components';

import { theme } from 'globalStyle';
import { Sort } from './commonTypes';
import GalleryHeader from './GalleryHeader';
import GalleryItems from './GalleryItems';
import ImagePanel from './ImagePanel';

const Gallery = () => {
    const [sort, setSort] = useState<Sort>('recent');

    return (
        <GalleryEl>
            <GalleryWrapper>
                <GalleryHeader sort={sort} setSort={setSort} />
                <GalleryItems sort={sort} />
            </GalleryWrapper>
            <ImagePanel />
        </GalleryEl>
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
    background: ${theme.backgroundSecondary};
    height: 100%;
`;
