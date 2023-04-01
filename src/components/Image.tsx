import { useContext } from 'react';
import styled from 'styled-components';

import { ReactComponent as Heart } from 'assets/heart.svg';
import { Image as ImageType } from './commonTypes';
import { ImageIdContext } from 'context/ImageIdContext';
import { theme } from 'globalStyle';
import useFavoriteImage from 'hooks/useFavoriteImage';
import { formatBytes } from 'utils';

interface Props {
    image: ImageType;
    imagePanel?: boolean;
}

const Image = ({ image, imagePanel }: Props) => {
    const { imageId, setImageId } = useContext(ImageIdContext);
    const { favoriteImage } = useFavoriteImage();

    const isSelected = !imagePanel && image.id === imageId;

    return (
        <ImageWrapper $imagePanel={imagePanel}>
            <ImageEl
                $isSelected={isSelected}
                $imagePanel={imagePanel}
                onClick={() => setImageId(image.id)}
                src={image.url}
            />
            <FilenameWrapper $imagePanel={imagePanel}>
                <Filename $imagePanel={imagePanel}>{image.filename}</Filename>
                {imagePanel && (
                    <HeartIcon
                        $favorited={image.favorited}
                        onClick={() => favoriteImage(image.id)}
                    />
                )}
            </FilenameWrapper>
            <Filesize>{formatBytes(image.sizeInBytes)}</Filesize>
        </ImageWrapper>
    );
};

export default Image;

// STYLES

const ImageWrapper = styled.article`
    max-width: ${({ $imagePanel }) => ($imagePanel ? '500px' : '250px')};
`;

const ImageEl = styled.img<{ $imagePanel?: boolean; $isSelected: boolean }>`
    cursor: pointer;
    height: ${({ $imagePanel }) => ($imagePanel ? '300px' : '175px')};
    width: ${({ $imagePanel }) => ($imagePanel ? '500px' : '250px')};
    border-radius: 10px;
    object-fit: cover;
    box-sizing: border-box;

    :hover {
        ${({ $imagePanel }) =>
            !$imagePanel && `outline: 3px solid ${theme.highlight}; outline-offset: 0.2rem;`};
    }
    ${({ $isSelected }) =>
        $isSelected && `outline: 3px solid ${theme.highlight}; outline-offset: 0.2rem;`};
`;

const FilenameWrapper = styled.div<{ $imagePanel?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: ${({ $imagePanel }) => ($imagePanel ? '1rem' : '0.5rem')};
    margin-bottom: 0.25rem;
`;

const Filename = styled.p<{ $imagePanel?: boolean; $isSelected: boolean }>`
    font-size: ${({ $imagePanel }) => ($imagePanel ? '1.5rem' : '1rem')};
    font-weight: bold;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Filesize = styled.p`
    margin: 0;
    color: ${theme.textSecondary};
`;

const HeartIcon = styled(Heart)<{ $favorited: boolean }>`
    cursor: pointer;
    height: 30px;
    width: 30px;
    stroke: ${theme.textSecondary};

    ${({ $favorited }) => $favorited && 'stroke: red; fill: red'};
`;
