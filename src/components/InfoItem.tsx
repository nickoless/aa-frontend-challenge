import styled from 'styled-components';

import theme from 'globalStyle';

interface Props {
    description: string;
    value: string;
}

const InfoItem = ({ description, value }: Props) => {
    return (
        <InfoItemEl>
            <p>{description}</p>
            <p>{value}</p>
        </InfoItemEl>
    );
};

export default InfoItem;

// STYLES

const InfoItemEl = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4rem;
    font-weight: bold;

    p:first-child {
        color: ${theme.textSecondary};
    }
`;
