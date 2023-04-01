import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import Image from 'components/Image';
import { ImageAPIContext } from 'context/ImageAPIContext';
import { ImageIdContext } from 'context/ImageIdContext';
import { theme } from 'globalStyle';
import useDeleteImage from 'hooks/useDeleteImage';
import { formatDate } from 'utils';
import { Image as ImageType } from './commonTypes';
import InfoItem from './InfoItem';

const ImagePanel = () => {
    const [selectedImage, setSelectedImage] = useState<ImageType>(null);
    const { images } = useContext(ImageAPIContext);
    const { imageId, setImageId } = useContext(ImageIdContext);
    const { deleteImage } = useDeleteImage();

    useEffect(() => {
        if (!images) return;

        const imageMatch = images.find((image) => image.id === imageId);
        setSelectedImage(imageMatch);
    }, [images, imageId, setImageId]);

    return (
        <PreviewPanelEl>
            {selectedImage ? (
                <>
                    <ContentWrapper>
                        <Image image={selectedImage} imagePanel />

                        <Heading>Information</Heading>
                        <InfoWrapper>
                            <InfoItem
                                description={'Uploaded By'}
                                value={selectedImage.uploadedBy}
                            />
                            <InfoItem
                                description={'Created'}
                                value={formatDate(selectedImage.createdAt)}
                            />
                            <InfoItem
                                description={'Last Modified'}
                                value={formatDate(selectedImage.updatedAt)}
                            />
                            <InfoItem
                                description={'Dimensions'}
                                value={`${selectedImage.dimensions.width} x ${selectedImage.dimensions.height}`}
                            />
                            <InfoItem
                                description={'Resolution'}
                                value={`${selectedImage.resolution.width} x ${selectedImage.resolution.height}`}
                            />
                        </InfoWrapper>

                        <Heading>Description</Heading>
                        <Description>
                            {selectedImage.description
                                ? selectedImage.description
                                : 'No description available'}
                        </Description>

                        <DeleteButton onClick={() => deleteImage(imageId)}>Delete</DeleteButton>
                    </ContentWrapper>
                </>
            ) : (
                <NoImage>No image selected</NoImage>
            )}
        </PreviewPanelEl>
    );
};

export default ImagePanel;

// STYLES

const PreviewPanelEl = styled.aside`
    position: fixed;
    right: 0;
    display: flex;
    width: 600px;
    height: 100%;
    background: ${theme.backgroundSecondary};
    border-left: 2px solid ${theme.border};
    overflow-y: auto;
`;

const ContentWrapper = styled.div`
    padding: 3rem;
`;

const Heading = styled.h2`
    margin-top: 3rem;
`;

const InfoWrapper = styled.div`
    > div {
        border-bottom: 2px solid ${theme.border};
    }
    div:first-child {
        border-top: 2px solid ${theme.border};
    }
`;

const Description = styled.p`
    margin-bottom: 0;
    color: ${theme.textSecondary};
`;

const DeleteButton = styled.button`
    cursor: pointer;
    margin-top: 3rem;
    margin-bottom: 6rem;
    width: 100%;
    height: 60px;
    font-size: 1rem;
    background: transparent;
    border: 2px solid ${theme.border};
    border-radius: 8px;

    :hover {
        border-color: ${theme.highlight};
    }
`;

const NoImage = styled.p`
    place-self: center;
    margin: auto;
    color: ${theme.textSecondary};
`;
