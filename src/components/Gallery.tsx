import Image from 'components/Image';
import { APIContext } from 'contexts/APIContext';
import { theme } from 'globalStyle';
import { useContext } from 'react';
import styled from 'styled-components';

const Gallery = () => {
    const { data, isLoading } = useContext(APIContext);

    return (
        <GalleryWrapper>
            <h1>Photos</h1>
            <nav>
                <ul>
                    <li>Recently Added</li>
                    <li>Favourited</li>
                </ul>
            </nav>
            <GalleryEl>
                {!isLoading &&
                    data &&
                    data.map((image, index) => (
                        <Image
                            key={image.url}
                            filename={image.filename}
                            index={index}
                            sizeInBytes={image.sizeInBytes}
                            url={image.url}
                        />
                    ))}
            </GalleryEl>
        </GalleryWrapper>
    );
};

export default Gallery;

const GalleryWrapper = styled.main`
    padding: 3rem;
    background: ${theme.backgroundSecondary};
`;

const GalleryEl = styled.section`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 3rem;
`;
