import { ImageDetailsContext } from 'contexts/ImageDetailsContext';
import { useContext } from 'react';
import styled from 'styled-components';
import Image from './Image';
import { theme } from 'globalStyle';
import { formatDate } from 'utils';

const SidePanel = () => {
    const { imageDetails } = useContext(ImageDetailsContext);

    return (
        <SidePanelEl>
            {imageDetails ? (
                <DetailsWrapper>
                    <Image image={imageDetails} sidePanel />

                    <DetailsHeading>Information</DetailsHeading>
                    <Detail>
                        <p>Uploaded By</p>
                        <p>{imageDetails.uploadedBy}</p>
                    </Detail>
                    <Detail>
                        <p>Created</p>
                        <p>{formatDate(imageDetails.createdAt)}</p>
                    </Detail>
                    <Detail>
                        <p>Last modified</p>
                        <p>{formatDate(imageDetails.updatedAt)}</p>
                    </Detail>
                    <Detail>
                        <p>Dimensions</p>
                        <p>
                            {imageDetails.dimensions.width} x{' '}
                            {imageDetails.dimensions.height}
                        </p>
                    </Detail>
                    <Detail>
                        <p>Resolution</p>
                        <p>
                            {imageDetails.resolution.width} x{' '}
                            {imageDetails.resolution.height}
                        </p>
                    </Detail>

                    <DetailsHeading>Description</DetailsHeading>
                    <Description>{imageDetails.description}</Description>
                </DetailsWrapper>
            ) : (
                <div>No image has been selected</div>
            )}
        </SidePanelEl>
    );
};

export default SidePanel;

// STYLES

const SidePanelEl = styled.aside`
    position: fixed;
    right: 0;
    width: 600px;
    height: 100%;
    border-left: 2px solid ${theme.border};
    overflow-y: auto;
`;

const DetailsWrapper = styled.div`
    margin: 3rem;
`;

const DetailsHeading = styled.h2`
    margin-top: 3rem;
    margin-bottom: 0;
`;

const Detail = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4rem;
    font-weight: bold;
    border-bottom: 2px solid ${theme.border};

    p:first-child {
        color: ${theme.textSecondary};
    }
`;

const Description = styled.p`
    color: ${theme.textSecondary};
`;
