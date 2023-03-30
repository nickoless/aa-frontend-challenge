import { theme } from 'globalStyle';
import styled from 'styled-components';
import { formatBytes } from 'utils';
import { ImageContext } from 'contexts/ImageContext';
import { useContext } from 'react';

interface Props {
    filename: string;
    index: number;
    sizeInBytes: number;
    url: string;
}

const Image = ({ filename, index, sizeInBytes, url }: Props) => {
    const { setImage, image } = useContext(ImageContext);

    return (
        <ImageWrapper onClick={() => setImage(index)}>
            <ImageEl src={url} />
            <Filename>{filename}</Filename>
            <Filesize>{formatBytes(sizeInBytes)}</Filesize>
        </ImageWrapper>
    );
};

export default Image;

const ImageEl = styled.img`
    height: 175px;
    width: 250px;
    border-radius: 10px;
    object-fit: cover;
`;

const ImageWrapper = styled.article`
    max-width: 250px;
`;

const Filename = styled.p`
    font-weight: bold;
    margin-top: 0.5rem;
    margin-bottom: 0.25rem;
`;

const Filesize = styled.p`
    margin: 0;
    color: ${theme.textSecondary};
`;
