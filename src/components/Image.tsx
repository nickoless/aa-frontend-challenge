import { theme } from 'globalStyle';
import styled from 'styled-components';
import { formatBytes } from 'utils';
import { ImageDetailsContext } from 'contexts/ImageDetailsContext';
import { useContext } from 'react';
import { Image as ImageType } from 'contexts/ImagesContext';
import { ReactComponent as Heart } from 'assets/heart.svg';

interface Props {
    image: ImageType;
    sidePanel?: boolean;
}

const Image = ({ image, sidePanel }: Props) => {
    const { imageDetails, setImageDetails } = useContext(ImageDetailsContext);
    const isSelected =
        !sidePanel && JSON.stringify(image) === JSON.stringify(imageDetails);

    return (
        <ImageWrapper $sidePanel={sidePanel}>
            <ImageEl
                onClick={() => setImageDetails(image)}
                $sidePanel={sidePanel}
                $isSelected={isSelected}
                src={image.url}
            />
            <FilenameWrapper $sidePanel={sidePanel}>
                <Filename $sidePanel={sidePanel}>{image.filename}</Filename>
                {sidePanel && <HeartIcon />}
            </FilenameWrapper>
            <Filesize>{formatBytes(image.sizeInBytes)}</Filesize>
        </ImageWrapper>
    );
};

export default Image;

// STYLES

const ImageWrapper = styled.article`
    max-width: ${({ $sidePanel }) => ($sidePanel ? '500px' : '250px')};
`;

const ImageEl = styled.img<{ $sidePanel?: boolean; $isSelected: boolean }>`
    cursor: pointer;
    height: ${({ $sidePanel }) => ($sidePanel ? '300px' : '175px')};
    width: ${({ $sidePanel }) => ($sidePanel ? '500px' : '250px')};
    border-radius: 10px;
    object-fit: cover;
    box-sizing: border-box;

    :hover {
        ${({ $sidePanel }) =>
            !$sidePanel && 'outline: 3px solid pink; outline-offset: 0.2rem;'};
    }
    ${({ $isSelected }) =>
        $isSelected && 'outline: 3px solid pink; outline-offset: 0.2rem;'};
`;

const FilenameWrapper = styled.div<{ $sidePanel?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: ${({ $sidePanel }) => ($sidePanel ? '1rem' : '0.5rem')};
    margin-bottom: 0.25rem;
`;

const Filename = styled.p<{ $sidePanel?: boolean; $isSelected: boolean }>`
    font-size: ${({ $sidePanel }) => ($sidePanel ? '1.5rem' : '1rem')};
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

const HeartIcon = styled(Heart)`
    height: 30px;
    width: 30px;
    stroke: ${theme.textSecondary};
`;
